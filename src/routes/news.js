const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

//getting all the info
newsRouter.get("", async (req, res) => {
  // res.render("news");
  try {
    const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);
    res.render("news", { articles: newsAPI.data });
  } catch (e) {
    if (e.response) {
      res.render("news", { articles: null });
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
    } else if (e.request) {
      res.render("news", { articles: null });
      console.log(e.request);
    } else {
      res.render("news", { articles: null });
      console.error("Error", e.message);
    }
  }
});

//getting only one article with its id
newsRouter.get("/article/:id", async (req, res) => {
  // res.render("news");
  let articleID = req.params.id;
  try {
    const newsAPI = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts/${articleID}`
    );
    res.render("newSingle", { article: newsAPI.data });
  } catch (e) {
    if (e.response) {
      res.render("newSingle", { article: null });
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
    } else if (e.request) {
      res.render("newSingle", { article: null });
      console.log(e.request);
    } else {
      res.render("newSingle", { article: null });
      console.error("Error", e.message);
    }
  }
});

//search functionality
newsRouter.post("", async (req, res) => {
  // res.render("news");
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts?search=${search}`
    );
    res.render("search", { articles: newsAPI.data });
  } catch (e) {
    if (e.response) {
      res.render("search", { articles: null });
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
    } else if (e.request) {
      res.render("search", { articles: null });
      console.log(e.request);
    } else {
      res.render("search", { articles: null });
      console.error("Error", e.message);
    }
  }
});

module.exports = newsRouter;
