test("link returns quizgame", () => {
  const quizgame = { name: "Quizgame (/Quizgame)" };
  const link = jest.fn((quizgame) => quizgame.name);

  link(quizgame);

  expect(link).toHaveReturnedWith("Quizgame (/Quizgame)");
});

test("link returns blogposts", () => {
  const blogposts = { name: "Blogposts (/Blogposts)" };
  const link = jest.fn((blogposts) => blogposts.name);

  link(blogposts);

  expect(link).toHaveReturnedWith("Blogposts (/Blogposts)");
});
