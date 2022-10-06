test("expects link to return /Signin", () => {
  const signin = { name: "{Link (/Signin)}" };
  const link = jest.fn((signin) => signin.name);

  link(signin);

  expect(link).toHaveReturnedWith("{Link (/Signin)}");
});

test("expects link to return /Signup", () => {
  const signup = { name: "{Link (/Signup)}" };
  const link = jest.fn((signup) => signup.name);

  link(signup);

  expect(link).toHaveReturnedWith("{Link (/Signup)}");
});
