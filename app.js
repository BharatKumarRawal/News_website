const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5000;

//static files
app.use(express.static("public"));
app.use(`/css`, express.static(__dirname + `public/css`));
app.use(`/css`, express.static(__dirname + `public/img`));
app.use(`/css`, express.static(__dirname + `public/js`));

//Templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

//Routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);
app.use("/article", newsRouter)
//server listening
app.listen(port, () => {
  console.log(`Server is listening at the port ${port}`);
});
