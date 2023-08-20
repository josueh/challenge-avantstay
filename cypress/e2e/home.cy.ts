describe('Home', () => {
  it('should render "AvantStay" message', () => {
    cy.visit('/')
    cy.contains(/avantstay/i).should('be.visible')
  })
})
