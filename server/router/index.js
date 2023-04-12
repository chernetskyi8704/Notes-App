const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const notesController = require("../controllers/notes-controller");
const router = new Router();
const { body } = require("express-validator"); 
const authMiddleware = require("../middlewares/auth-middleware.js");

router.post(
  "/registration",
  // =========================================
  body("firstName")
    .notEmpty()
    .withMessage("This field is required!")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("Your first name should consist at least 2 symbols."),
  body("lastName")
    .notEmpty()
    .withMessage("This field is required!")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("Your last name should consist at least 2 symbols."),
  // =========================================
  body("email").notEmpty().isEmail().withMessage("Check the entered email."), //4 Цю функцію ми передаємо в якості middleware в нашому запиті, та передаємо назву поля яке ми хочемо провалідувати
  // =========================================
  body("password").isLength({
    min: 3,
    max: 32,
  }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout); 
router.get("/activate/:link", userController.activate); 
router.get("/refresh", userController.refresh); 
router.get("/notes/:id", authMiddleware, notesController.getAllNotes);
router.post("/createNote", authMiddleware, notesController.createNote);
router.put("/update/:id", authMiddleware, notesController.updateNote);
router.delete("/delete/:id", authMiddleware, notesController.deleteNote);

module.exports = router;
