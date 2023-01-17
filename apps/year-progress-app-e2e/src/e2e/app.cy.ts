//import { getGreeting } from '../support/app.po';

// describe('year-progress-app', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     // Custom command example, see `../support/commands.ts` file
//     cy.login('my-email@something.com', 'myPassword');

//     // Function helper example, see `../support/app.po.ts` file
//     getGreeting().contains('Welcome year-progress-app');
//   });
// });

describe("Year progress bar rendering", () => {
  beforeEach(() => cy.visit("/"));

  it('should show current year', () => {
    const year = new Date().getFullYear().toString();
    cy.get('h3').contains(year);
  });
});
