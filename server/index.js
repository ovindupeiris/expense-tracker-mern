const express = require("express");
const app = express();

app.get("/", (req, res) => res.status(200).json({
    message: "Hello World!"
}));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server listening on port ${port}`));