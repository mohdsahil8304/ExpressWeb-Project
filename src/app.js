const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 9000;
//public static path
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
//routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Opps! Page not found",
  });
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
