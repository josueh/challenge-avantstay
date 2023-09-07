describe('App Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render "AvantStay" text logo on larger screens', () => {
    cy.viewport(1200, 700)
    cy.get('.logo-name').should('be.visible')
    cy.get('.logo-icon').should('not.be.visible')
  })

  it('should render "AvantStay" icon logo on smaller screens', () => {
    cy.viewport(800, 700)
    cy.get('.logo-name').should('not.be.visible')
    cy.get('.logo-icon').should('be.visible')
  })

  it('should redirect to "/homes" page when "Find Homes" is selected', () => {
    cy.get('a').contains('Find Homes').click()
    cy.url().should('contain', '/homes')
  })
})
