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

const patchVotes = (id, value, type) => {
  axios.patch(`https://domh-be-nc-news.herokuapp.com/api/${type}/${id}`, {
    inc_votes: value
  });
};

const postComment = (article_id, username, body) => {
  console.log(article_id, username, body, "UTILS");
  return axios.post(
    `https://domh-be-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    { username: username, body: body }
  );
};

module.exports = {
  getAllTopics,
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchVotes,
  postComment
};
