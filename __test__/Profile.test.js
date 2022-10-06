test("expects link to return /quiz", () => {
  const quiz = { name: "{Link (/quiz)}" };
  const link = jest.fn((quiz) => quiz.name);

  link(quiz);

  expect(link).toHaveReturnedWith("{Link (/quiz)}");
});

test("expects link to return /forum", () => {
  const forum = { name: "{Link (/forum)}" };
  const link = jest.fn((forum) => forum.name);

  link(forum);

  expect(link).toHaveReturnedWith("{Link (/forum)}");
});
