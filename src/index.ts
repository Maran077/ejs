import express from "express";
import path from "path";

const app = express();
const port = 3000;

const employees = {
  "John Doe": "Manager",
  "Jane Smith": "Developer",
  "Alice Johnson": "Designer",
  "Bob Brown": "Sales",
};

const template = {
  header: "My EJS Page",
  footer: "This is rendered using EJS!",
};

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/page1", (req, res) => {
  res.render("page1", { ...template, page: "01", employees });
});
app.get("/page2", (req, res) => {
  res.render("page2", { ...template, page: "02" });
});
app.get("/page3", (req, res) => {
  res.render("page3", { ...template, page: "03" });
});
app.get("/page4", (req, res) => {
  res.render("page4", { ...template, page: "04" });
});
app.get("/page5", (req, res) => {
  res.render("page5", { ...template, page: "05" });
});
app.get("/page6", (req, res) => {
  res.render("page6", { ...template, page: "06" });
});
app.get("/page7", (req, res) => {
  res.render("page7", { ...template, page: "07" });
});

app.get("/cover", (req, res) => {
  res.render("cover");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
