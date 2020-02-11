const axios = require("axios");

const getArticles = ({ slug }, { sortBy }) => {
  return axios
    .get("https://domh-be-nc-news.herokuapp.com/api/articles", {
      params: { topic: slug, sort_by: sortBy, limit: 100 }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getArticleById = article_id => {
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

const patchVotes = (id, value) => {
  axios.patch(`https://domh-be-nc-news.herokuapp.com/api/articles/${id}`, {
    inc_votes: value
  });
};

module.exports = {
  getAllTopics,
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchVotes
};
