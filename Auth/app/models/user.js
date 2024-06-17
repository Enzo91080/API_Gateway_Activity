const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "The email field is required"],
    unique: [true, "The email must be unique"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regex.test(email);
      },
      message: "Please fill in a valid email adress",
    },
  },
  password: {
    type: String,
    required: [true, "The password field is required"],
    validate: {
      validator: function (password) {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\~\-]).{8,}$/;
        return regex.test(password);
      },
      message:
        "Please fill in a valid password, which must contain at least an uppercase letter, a lowercase letter, a number, a special character and be at least 8 characters long",
    },
  },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
