import express from "express";
import path from "path";

const app = express();
const port = 3000;

const facilityData = {
  FacilityName: "Fluid Dynamics Inc",
  Location: "14/63, 7th Main Street, New York-0999876",
  TotalEmployees: 1735,
  Assets: 1290,
  Suppliers: 75
};


const template = {
  header: "My EJS Page",
  footer: "This is rendered using EJS!",
};

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/full", (req, res) => {
  res.render("full", { ...template, facilities: facilityData });
})

app.get("/cover", (req, res) => {
  res.render("cover");
});

app.get("/:page", (req, res) => {
  const { page } = req.params
  res.render("layout", { ...template, page, facilities: facilityData });
});

/*
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
app.get("/page8", (req, res) => {
  res.render("page8", { ...template, page: "07" });
});
*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
