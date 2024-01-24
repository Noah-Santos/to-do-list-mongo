const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config({ path: __dirname + `/.env` });
const connectDB = require("./db/connect");
const taskRoute = require("./routes/taskController");
const port = 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("server is working");
});
app.use("/task", taskRoute);

const initServer = async () => {
	try {
		await connectDB('mongodb+srv://nsanto591:todolist626@data.gvhmae7.mongodb.net/Info');
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};
initServer();