const axios = require("axios");

const getArticles = ({ slug, article_id }) => {
  console.log(article_id, "<<<< GET ARTICLES");
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/articles", {
      params: { topic: slug, article_id: article_id }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getAllTopics = () => {
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

module.exports = { getAllTopics, getArticles };
