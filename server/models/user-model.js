const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false }, 
  link: { type: String },
});

module.exports = model("User", UserSchema);
