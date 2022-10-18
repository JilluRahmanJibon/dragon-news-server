const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categoris = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
	res.send("news portal running");
});

app.get("/news-categories", (req, res) => {
	res.send(categoris);
});
app.get("/news", (req, res) => {
	res.send(news);
});
app.use(cors());
app.listen(port, () => {
	console.log("port is running now ", { port });
});
