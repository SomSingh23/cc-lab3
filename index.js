let express = require("express");
let app = express();
let User = require("./user");
app.set("view engine", "ejs");
app.use(express.static("public"));

// middlewares to parse req.body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(5001, () => {
  console.log("Up and Running on 5k+1");
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
app.get("/protected", (req, res) => {
  return res.render("protect");
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
    return res.redirect("/");
  }
});
