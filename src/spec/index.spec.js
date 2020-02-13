const { createRef } = require("../utils/index.js");

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
