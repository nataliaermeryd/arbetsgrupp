test("expects paragraph to be navigateBack", () => {
  const navigateBack = { name: "{useNavigateBack()}" };
  const paragraph = jest.fn((navigateBack) => navigateBack.name);

  paragraph(navigateBack);

  expect(paragraph).toHaveReturnedWith("{useNavigateBack()}");
});
