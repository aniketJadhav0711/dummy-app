describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.contains("Hello World 20");
  });
});
