const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

/* //Como hostear react directo desde express? Asi --> 
//Primero le decimos a express que use todos los archivos del build de react asi:
app.use(express.static(__dirname + "/efecto3-60/build"));
//Luego le decimos a express que sirva todo eso desde el home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/efecto3-60/build", "index.html"))
}); */

const db = mysql.createConnection({
  host: "localhost",
  user: "efecto",
  password: "Efecto_360",
  database: "efecto360",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello, this is the Efecto 3'60 backend!");
});

app.get("/frontpage", (req, res) => {
  const articleId = req.params.id;
  const query =
    "SELECT sections.sectionID, articles.articleID, articles.cover, sections.section, articles.title, front_page.second_bannerURL, front_page.third_bannerURL, front_page.second_title, front_page.third_title FROM articles INNER JOIN sections ON articles.sectionID = sections.sectionID INNER JOIN front_page ON articles.articleID = front_page.front_pageID;";

  db.query(query, articleId, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get("/newarticle/:id", (req, res) => {
  const articleId = req.params.id;
  const query =
    "SELECT articleID, cover, section, title, author, debut FROM all_data WHERE sectionID = ? ORDER BY articleID DESC LIMIT 1;";

  db.query(query, articleId, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get("/newitems/:id", (req, res) => {
  const articleId = req.params.id;
  const query =
    "SELECT articleID, cover, section, title, author, debut FROM all_data WHERE sectionID = ? ORDER BY articleID DESC LIMIT 5";

  db.query(query, articleId, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get("/articleslist/:id", (req, res) => {
  const articleId = req.params.id;
  const query =
    "SELECT articleID, cover, section, title, author, debut FROM all_data WHERE sectionID = ?";

  db.query(query, articleId, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get("/singleitem/:id", (req, res) => {
  const articleId = req.params.id;
  const data = articleId.split("-");
  const query =
    "SELECT cover, section, title, explanation, debut, article, avatar, author, degree, address FROM all_data WHERE sectionID = ? AND articleID = ?";

  db.query(query, data, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.get("/aboutusback", (req, res) => {
  const query = "SELECT * FROM about_us";
  db.query(query, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend in port: 8800");
});
