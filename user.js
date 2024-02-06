require("dotenv").config();
let mongoose = require("mongoose");
mongoose
  .connect(process.env.URL)
  .then((p) => {
    console.log("connected to local mongoDB");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dateofbirth: {
    type: Date,
  },
  emailaddress: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
