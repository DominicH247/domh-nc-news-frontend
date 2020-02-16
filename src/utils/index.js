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

  const formatted = arrayCopy.map(item => {
    return {
      ...item,
      [string1]: refObj1[item[string2]]
    };
  });

  return formatted;
};

module.exports = { formatArticles, createRef };
