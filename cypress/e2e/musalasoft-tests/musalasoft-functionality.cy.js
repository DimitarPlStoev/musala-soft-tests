const testsuit = require("../../support/musalasoft-test-suit/musalasoft-suit");

describe("Testing basic functionalities on Musalasoft web page ", () => {
  beforeEach("", () => {
    cy.visit("/");
    cy.clearCookies();
  });

  it("Testing five diferent users with different wrong format emails receive the correct error message ", () => {
    testsuit.contactUsForm();
  });

  it("", () => {
    testsuit.faceBookProfile()
  });
});
