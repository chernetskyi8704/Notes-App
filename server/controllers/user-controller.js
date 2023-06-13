require("dotenv").config();
const userService = require("../service/user-service");

const { validationResult } = require("express-validator");
const ApiError = require("../exeptions/api-error.js");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req); 

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error.", errors.array()));
      }
    
      const { firstName, lastName, email, password, reCaptchaToken  } = req.body; 

      const userData = await userService.registration(
        firstName,
        lastName,
        email,
        password,
        reCaptchaToken 
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body; 
      const userData = await userService.login(email, password); 
   
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        secure: true,
        sameSite: 'None',
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const refreshToken = req.cookies["refreshToken"]; 
      const token = await userService.logout(refreshToken); 
      res.clearCookie("refreshToken"); 

      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;

      await userService.activate(activationLink); 

      return res.redirect(process.env.CLIENT_URL); 
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken); 

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        secure: true,
        sameSite: 'None',
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async deleteAccount(req, res, next) {
    try {
      const { userId, password } = req.body;

      await userService.deleteAccount(userId, password);

      return res.json({ message: "Account deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
