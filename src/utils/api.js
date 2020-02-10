const axios = require("axios");

const getArticles = ({ slug, article_id }) => {
  console.log(slug, article_id, "<<<<");
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/articles?limit=100", {
      params: { topic: slug, article_id }
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
