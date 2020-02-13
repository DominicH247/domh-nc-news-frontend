const formatArticles = (articles, topics, users) => {
  const articlesCopy = [...articles];

  // topic ref object
  const topicRef = {};
  topics.forEach(topic => {
    topicRef[topic.slug] = topic.topic_icon;
  });

  // user reference object
  const userRef = {};
  users.forEach(user => {
    userRef[user.username] = user.avatar_url;
  });

  const articlesFormatted = articlesCopy.map(article => {
    return {
      ...article,
      topic_icon: topicRef[article.topic],
      author_icon: userRef[article.author]
    };
  });

  return articlesFormatted;
};

module.exports = { formatArticles };
