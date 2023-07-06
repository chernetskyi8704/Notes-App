require("dotenv").config();
const UserModel = require("../models/user-model");
const TokenModel = require("../models/token-model");
const NoteModel = require("../models/note-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenServise = require("./token-servise");
const UserDto = require("../dto/user-dto");
const ApiError = require("../exeptions/api-error.js");

class UserService {
  async registration(firstName, lastName, email, password, reCaptchaToken) {
    if (!reCaptchaToken) {
      throw ApiError.BadRequest(`Incorrect reCaptchaToken ${reCaptchaToken}`);
    }

    const isReCaptchaTokenValid = await tokenServise.validateReCaptchaToken(
      reCaptchaToken
    );

    if (isReCaptchaTokenValid) {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
        throw ApiError.BadRequest(
          `User with email ${email} is already registered!`
        );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const link = uuid.v4();

      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        link,
      });

      await mailService.sendActivationMain(
        firstName,
        lastName,
        email,
        `${process.env.API_URL}/api/activate/${link}`
      );

      const userDto = new UserDto(user);
      const tokens = tokenServise.generateTokens({ ...userDto });

      await tokenServise.saveToken(userDto.id, tokens.refreshToken);

      return {
        ...tokens,
        user: userDto,
      };
    } else {
      return next(ApiError.BadRequest("reCAPTCHA verification failed."));
    }
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ link: activationLink });

    if (!user) {
      throw ApiError.BadRequest(`Невірне посилання для активації!`); // якщо користувача немає - кидаємо помилку
    }

    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest(`No user finded.`);
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw ApiError.BadRequest("Incorrect password.");
    }

    const userDto = new UserDto(user);
    const tokens = tokenServise.generateTokens({ ...userDto });

    await tokenServise.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenServise.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenServise.validateRefreshToken(refreshToken);
    const tokenFromDDb = await tokenServise.findToken(refreshToken);

    if (!userData || !tokenFromDDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenServise.generateTokens({ ...userDto });

    await tokenServise.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async deleteAccount(userId, password) {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw ApiError.BadRequest(`No user finded.`);
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw ApiError.BadRequest("Incorrect password.");
    }

    await UserModel.findByIdAndDelete(userId);
    await TokenModel.deleteMany({ user: userId });
    await NoteModel.deleteMany({ user: userId });

    return { message: "Account deleted successfully" };
  }
}

module.exports = new UserService();
