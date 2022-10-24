// Jillu Rahman Jibon
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2700;

app.use(cors());
app.listen(port, () => {
	console.log("port is running: ", { port });
});
app.get("/", (req, res) => {
	res.send("Now ready for use");
});
const categories = require("./data/categories.json");
app.get("/news_categories", (req, res) => {
	res.send(categories);
});

const news = require("./data/news.json");
app.get("/category/:id", (req, res) => {
	const id = req.params.id;
	if (id === "08") {
		res.send(news);
	} else {
		const selectCategories = news.filter(n => n.category_id === id);
		res.send(selectCategories);
	}
});
app.get("/news/:id", (req, res) => {
	const id = req.params.id;
	const selectNews = news.find(n => n._id === id);
	res.send(selectNews);
});
app.get("/news", (req, res) => {
	res.send(news);
});
