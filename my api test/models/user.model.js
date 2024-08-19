const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the user name"],
    },
    last_name: {
      type: String,
      required: [true, "Please provide the user last name"],
    },
    num: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: false,
    },
  },
  { timestamps: true } 
);

const User = mongoose.model("User", userSchema);
module.exports = User;
