describe('Home', () => {
  it('should render "AvantStay" logo', () => {
    cy.visit('/')
    cy.get('img[alt="AvantStay"]').should('be.visible')
  })

  it('should load and render query string `query` when defined', () => {
    cy.visit('/?query=california')
    cy.contains(/california/i).should('be.visible')
  })

  it('should update query strings `query` when search input changes', () => {
    cy.visit('/')
    cy.get('input[name=search-text]').type('killing bugs')
    cy.url().should('match', /killing.*bugs/i)
  })
})
