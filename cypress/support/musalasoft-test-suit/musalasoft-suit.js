const locators = require("../../support/musalasoft-page-objects/musalasoft-locators");


export function contactUsForm() {
  cy.fixture("users").then((users) => {
    users.forEach((user) => {
      cy.visit("/");
      cy.get("a button")
        .contains("Contact us")
        .should("be.visible")
        .click({ force: true });
      cy.get(locators .CONTACT_FORM_INPUT_NAME).clear().type(user.name);
      cy.get(locators .CONTACT_FORM_INPUT_EMAIL).clear().type(user.email);
      cy.get(locators .CONTACT_FORM_INPUT_SUBJECT).clear().type(user.subject);
      cy.get(locators .CONTACT_FORM_INPUT_MESSAGE).clear().type(user.messasge);
      cy.get(locators .PRIVACY_CHECKBOX).check();
      cy.get(locators .CONTACK_FORM_SUBMIT_BUTTON).click();
      cy.get(locators .CONTACT_FORM_ERROR_MESSAGE)
        .contains(
          "One or more fields have an error. Please check and try again."
        )
        .invoke("removeAttr", "aria-hidden")
        .should("be.visible");
    });
  });
}
