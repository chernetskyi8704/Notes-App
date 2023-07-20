const UserModel = require("../models/user-model");
const NoteModel = require("../models/note-model");
const ApiError = require("../exeptions/api-error.js");
const jwt = require("jsonwebtoken");

class NotesService {
  async getAllNotes(userId, page, limit, search) {
    if (!userId) {
      throw ApiError.BadRequest(`Invalid userId: ${userId}`);
    }
    
    const codedUserNotes = await NoteModel.find({
      userId: userId,
    }).skip((page-1)*limit).limit(limit);

    const decodedUserNotes = codedUserNotes.map(userNote => {
      try {
        const decodedTitle = jwt.verify(userNote._doc.title, process.env.NOTE_ACCESS_SECRET);
        const decodedContent = jwt.verify(userNote._doc.content, process.env.NOTE_ACCESS_SECRET);
        return { 
          ...userNote._doc,
          title: decodedTitle,
          content: decodedContent,
        };
      } catch (error) {
        console.log(error);
        return { ...userNote };
      }
    });

    const filteredNotes = decodedUserNotes.filter(note=>{
      if(note.title.includes(search)){
      return note
    }});

    const totalPagesCount = Math.ceil(filteredNotes.length / limit);

    return { userNotes: filteredNotes, totalPagesCount };
  }

  async createNote(userId, title, content, date, color) {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      throw ApiError.BadRequest(`No user found with userId: ${userId}`);
    }
    const encodedTitle = jwt.sign(title, process.env.NOTE_ACCESS_SECRET);
    const encodedContent = jwt.sign(content, process.env.NOTE_ACCESS_SECRET);

    const note = await NoteModel.create({
      userId,
      title: encodedTitle,
      content: encodedContent,
      date,
      color,
    });

    return note;
  }

  async updateNote(id, updatedNote) {
    const encodedTitle = jwt.sign(updatedNote.title, process.env.NOTE_ACCESS_SECRET);
    const encodedContent = jwt.sign(updatedNote.content, process.env.NOTE_ACCESS_SECRET);

    const note = await NoteModel.findByIdAndUpdate(id, {title: encodedTitle, content: encodedContent}, {
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
