test("route returns path home", () => {
  const home = { name: "Home (/)" };
  const route = jest.fn((home) => home.name);

  route(home);

  expect(route).toHaveReturnedWith("Home (/)");
});

test("route returns path profile", () => {
  const profile = { name: "Profile (/mypage)" };
  const route = jest.fn((profile) => profile.name);

  route(profile);

  expect(route).toHaveReturnedWith("Profile (/mypage)");
});

test("route returns path forum", () => {
  const forum = { name: "Forum (/forum)" };
  const route = jest.fn((forum) => forum.name);

  route(forum);

  expect(route).toHaveReturnedWith("Forum (/forum)");
});

test("route returns path quiz", () => {
  const quiz = { name: "Quiz (/quiz)" };
  const route = jest.fn((quiz) => quiz.name);

  route(quiz);

  expect(route).toHaveReturnedWith("Quiz (/quiz)");
});

test("route returns path signup", () => {
  const signup = { name: "Signup (/signup)" };
  const route = jest.fn((signup) => signup.name);

  route(signup);

  expect(route).toHaveReturnedWith("Signup (/signup)");
});

test("route returns path signin", () => {
  const signin = { name: "Signin (/signin)" };
  const route = jest.fn((signin) => signin.name);

  route(signin);

  expect(route).toHaveReturnedWith("Signin (/signin)");
});

test("route returns path signout", () => {
  const signout = { name: "Signout (/signout)" };
  const route = jest.fn((signout) => signout.name);

  route(signout);

  expect(route).toHaveReturnedWith("Signout (/signout)");
});
