const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Datas = require("./datas.json");

const app = express();

app.use(cors());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", (req, res) => {
	return res.send("hello world");
});

app.get("/countries", (req, res) => {
	if (Datas && Datas?.length <= 0) {
		return res.send({ message: "Erreur technique" });
	}
	return res.send(Datas);
});

app.get("/countries/:id([0-9]+)", (req, res) => {
	const id = parseInt(req.params.id);

	if (Datas && Datas?.length <= 0) {
		return res.send({ message: "Erreur technique" });
	}

	if (!id && id <= 0) {
		return res.send({ message: "Erreur technique" });
	}

	const country = Object.values(Datas).find(
		(country) => country.number === id
	);

	if (country == null) {
		res.status(404).json({ message: "Country not found" });
	} else {
		res.json(country);
	}
});

app.listen(3000, () => console.log(`🚀 Server ready at: 3000 ⭐️`));

module.exports = app;
