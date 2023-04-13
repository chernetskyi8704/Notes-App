const UserModel = require("../models/user-model");
const NoteModel = require("../models/note-model");
const ApiError = require("../exeptions/api-error.js");

class NotesService {
  async getAllNotes(userId) {
    const userNotes = NoteModel.find({ userId });
    return userNotes;
  }

  async createNote(userId, title, content, date, color) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      throw ApiError.BadRequest(`No user found with userId: ${userId}`);
    }

    const note = await NoteModel.create({
      userId,
      title,
      content,
      date,
      color,
    });

    return note;
  }

  async updateNote(id, updatedNote) {
    const note = await NoteModel.findByIdAndUpdate(id, updatedNote, {
      new: true,
    });
    if (!note) {
      throw ApiError.NotFound(`No note found with id: ${id}`);
    }

    return { message: "Note updated successfully", note };
  }

  async deleteNote(id) {
    const note = await NoteModel.findByIdAndDelete(id);
    if (!note) {
      throw ApiError.NotFound(`No note found with id: ${id}`);
    }

    return { message: "Note deleted successfully" };
  }
}

module.exports = new NotesService();
