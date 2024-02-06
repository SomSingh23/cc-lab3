require("dotenv").config();
let path = require("path");
let express = require("express");
let app = express();
let User = require("./user");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static("public"));

// middlewares to parse req.body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT, () => {
  console.log(`Up and Running on ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  return res.render("home");
});
app.get("/signup", (req, res) => {
  return res.render("signup");
});
app.get("/login", (req, res) => {
  return res.render("login");
});

// post routes start here

app.post("/signup", async (req, res) => {
  try {
    let newUser = new User({
      ...req.body,
    });
    await newUser.save();
    return res.redirect("login");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

app.post("/login", async (req, res) => {
  let data = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!data) {
    return res.json({
      message: "Username or Password Invalid",
    });
  }
  return res.render("success", {
    password: req.body.password,
    username: req.body.username,
  });
});

app.post("/final_login", async (req, res) => {
  let data = await User.findOne({
    lastname: req.body.lastname,
  });
  if (!data) {
    return res.json({ message: "Wrong Last Name" });
  }
  return res.send(data);
});
