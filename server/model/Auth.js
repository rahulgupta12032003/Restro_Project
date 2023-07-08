const { Schema, model } = require("mongoose");

const AuthSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const UsersModel = model("Restro_User", AuthSchema);
module.exports = UsersModel;
