Cypress.Commands.add("clearCookiesBar", () => {
    cy.get('#wt-cli-accept-all-btn').then((cookies) => {
        if (cookies.is(':visible')) {
            cy.wrap(cookies).click({ force: true });
        }
    })
});