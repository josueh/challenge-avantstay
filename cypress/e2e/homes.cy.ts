describe('Homes', () => {
  beforeEach(() => {
    cy.visit('/homes')
  })

  it('should render "Bedrooms" information', () => {
    cy.contains(/\d+ bedrooms/i).should('be.visible')
  })

  it('should render "Loading more" text', () => {
    cy.scrollTo('bottom')
    cy.contains(/Loading more/i).should('be.visible')
  })
})
