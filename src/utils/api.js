const axios = require("axios");

const getArticles = () => {
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/articles?limit=100")
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
