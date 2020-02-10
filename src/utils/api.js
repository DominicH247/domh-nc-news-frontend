const axios = require("axios");

const getArticles = ({ slug }) => {
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/articles", {
      params: { topic: slug }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getArticleById = article_id => {
  console.log(article_id, "GET ART BY ID UTIL");
  return axios
    .get(`https://domh-be-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

const getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://domh-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const getAllTopics = () => {
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

module.exports = {
  getAllTopics,
  getArticles,
  getArticleById,
  getCommentsByArticleId
};
