const { createRef, formatArticles } = require("../utils/index.js");

describe("createRef(), created a reference object from the given array of objects and the desired key", () => {
  test("When passed in a single object and two strings which act as the desired keys, it will generate a new reference object and returns it", () => {
    const testArr = [{ slug: "this is a test", icon: "www.image.com" }];
    expect(createRef(testArr, "slug", "icon")).toEqual({
      ["this is a test"]: "www.image.com"
    });
  });

  test("When passed in one or more objects and two strings which act as the desired keys, it will generate a new reference object and returns it", () => {
    const testArr = [
      { slug: "this is a test1", icon: "www.image1.com" },
      { slug: "this is a test2", icon: "www.image2.com" }
    ];
    expect(createRef(testArr, "slug", "icon")).toEqual({
      ["this is a test1"]: "www.image1.com",
      ["this is a test2"]: "www.image2.com"
    });
  });

  test("The function does not mutate the original array", () => {
    const testArr = [
      { slug: "this is a test1", icon: "www.image1.com" },
      { slug: "this is a test2", icon: "www.image2.com" }
    ];

    createRef(testArr, "slug", "icon");

    expect(testArr).toEqual([
      { slug: "this is a test1", icon: "www.image1.com" },
      { slug: "this is a test2", icon: "www.image2.com" }
    ]);
  });
});

describe("formatArticles(), modifies the array of article objects by adding the corresponding topic icon and user avatar to the object", () => {
  test("When passed in a single article object and two reference objects , the the key value pairs are added to the new article object", () => {
    const articleList = [
      { title: "the title", username: "test user", slug: "football" }
    ];
    const refObj = { football: "www.topicIcon.com" };
    const modifiedArticle = [
      {
        title: "the title",
        username: "test user",
        slug: "football",
        topicIcon: "www.topicIcon.com"
      }
    ];

    expect(formatArticles(articleList, refObj, "topicIcon", "slug")).toEqual(
      modifiedArticle
    );
  });
  test("Does not modify the original array", () => {
    const articleList = [
      { title: "the title", username: "test user", slug: "football" }
    ];

    const refObj = { football: "www.topicIcon.com" };

    formatArticles(articleList, refObj, "topicIcon", "slug");

    expect(articleList).toEqual([
      { title: "the title", username: "test user", slug: "football" }
    ]);
  });
});
