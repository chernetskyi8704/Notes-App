require("dotenv").config();
const userService = require("../service/user-service");

const { validationResult } = require("express-validator"); //3 Отримуємо результат валідації
const ApiError = require("../exeptions/api-error.js");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req); 

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error.", errors.array())); //3 передаємо цю помилку в наш middleware
      }
    
      const { firstName, lastName, email, password } = req.body; 

      const userData = await userService.registration(
        firstName,
        lastName,
        email,
        password
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true,
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
        // secure: true,
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
        // secure: true, 
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();