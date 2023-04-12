const { Schema, model } = require("mongoose"); // імпортуємо необхіжні інстурменти для роботи із БД

const NoteSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String },
});

module.exports = model("Note", NoteSchema);
