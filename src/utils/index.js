const createRef = (array, firstKey, secondKey) => {
  const arrayCopy = [...array];

  const refObject = {};

  arrayCopy.forEach(item => {
    refObject[item[firstKey]] = item[secondKey];
  });

  return refObject;
};

const formatArticles = (array, refObj1, string1, string2) => {
  const arrayCopy = [...array];

  // // topic ref object
  // const topicRef = {};
  // topics.forEach(topic => {
  //   topicRef[topic.slug] = topic.topic_icon;
  // });

  // // user reference object
  // const userRef = {};
  // users.forEach(user => {
  //   userRef[user.username] = user.avatar_url;
  // });

  const formatted = arrayCopy.map(item => {
    return {
      ...item,
      [string1]: refObj1[item[string2]]
    };
  });

  console.log(formatted);

  return formatted;
};

module.exports = { formatArticles, createRef };
