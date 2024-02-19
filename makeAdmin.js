require("dotenv").config();
let User = require("./user");
let newAdmin = new User({
  username: "Admin",
  password: "", // something strong
});
newAdmin
  .save()
  .then((p) => console.log(p))
  .catch((err) => console.log(err));
