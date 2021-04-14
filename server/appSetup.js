const express = require("express");
const cors = require("cors");

const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(5000, () => console.log(`Server running at port: 5000`));

module.exports = app;
