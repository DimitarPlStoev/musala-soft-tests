const locators = require("../../support/musalasoft-page-objects/musalasoft-locators");

//Test Case 1 - Testing five diferent users with different wrong format emails receive the correct error message
export function contactUsForm() {
  cy.fixture("users").then((users) => {
    users.forEach((user) => {
      cy.visit("/");
      cy.get("a button")
        .contains("Contact us")
        .should("be.visible")
        .click({ force: true });
      cy.get(locators.CONTACT_FORM_INPUT_NAME).clear().type(user.name);
      cy.get(locators.CONTACT_FORM_INPUT_EMAIL).clear().type(user.email);
      cy.get(locators.CONTACT_FORM_INPUT_SUBJECT).clear().type(user.subject);
      cy.get(locators.CONTACT_FORM_INPUT_MESSAGE).clear().type(user.messasge);
      cy.get(locators.PRIVACY_CHECKBOX).check();
      cy.get(locators.CONTACK_FORM_SUBMIT_BUTTON).click();
      cy.get(locators.CONTACT_FORM_ERROR_MESSAGE)
        .contains(
          "One or more fields have an error. Please check and try again."
        )
        .invoke("removeAttr", "aria-hidden")
        .should("be.visible");
    });
  });
}


//Test Case 2
export function faceBookProfile() {
    cy.clearCookiesBar()
    cy.get('a').contains('Company').click({ force: true })
    cy.url().should('eq', locators.ABOUT_THE_COMPANY_URL);
    cy.get(locators.COMPANY_MEMBERS_CONTAINER).contains('Leadership').should('be.visible')
    cy.get(locators.SOC_MEDIA_LINKS_CONTAINER).eq(5).invoke('removeAttr', 'target').click({ force: true })
    cy.url().should('eq', locators.MUSALASOFT_FB_PAGE_URL);
    
  }