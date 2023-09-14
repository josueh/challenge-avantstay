describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render "AvantStay" logo', () => {
    cy.get('img[alt="AvantStay"]').should('be.visible')
  })

  it('should render loading message', () => {
    cy.contains('PLEASE WAIT').should('be.visible')
  })
})
