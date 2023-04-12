require("dotenv").config();

const NotesService = require("../service/notes-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exeptions/api-error.js");

class NotesController {
  // 18 === Ця функція буде доступною лише для авторизованих користувачів ===
  async getAllNotes(req, res, next) {
    try {
      const userId = req.params.id.toString();
      const notes = await NotesService.getAllNotes(userId);

      return res.json(notes);
    } catch (error) {
      next(error);
    }
  }

  async createNote(req, res, next) {
    try {
      const { userId, title, content, date } = req.body;
      const noteData = await NotesService.createNote(userId, title, content, date);

      return res.json(noteData);
    } catch (error) {
      next(error);
    }
  }

  async updateNote(req, res, next) {
    try {
      const id = req.params.id.toString();
      const { title, content } = req.body;
      const noteData = await NotesService.updateNote(id, { title, content });

      return res.json(noteData);
    } catch (error) {
      next(error);
    }
  }

  async deleteNote(req, res, next) {
    try {
      const id = req.params.id.toString();
      await NotesService.deleteNote(id);

      return res.json({ message: "Note deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NotesController();