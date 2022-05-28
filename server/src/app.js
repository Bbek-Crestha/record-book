const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { authRouter } = require("./services");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors());

app.use("/api/auth", authRouter);

module.exports = app;
