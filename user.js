let mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/cloudComputing_lab3_ps1")
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
