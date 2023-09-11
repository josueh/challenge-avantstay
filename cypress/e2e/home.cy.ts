describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render "AvantStay" logo', () => {
    cy.get('img[alt="AvantStay"]').should('be.visible')
  })

  it('should render loading message', () => {
    cy.contains('PLEASE WAIT').should('be.visible')
  })

  it('should render `Bedrooms` and `Budget Season` information', () => {
    cy.contains('Bedrooms').should('be.visible')
    cy.contains('Budget Season').should('be.visible')
  })

  it('should load and render query string `query` when defined', () => {
    cy.visit('/?query=california')
    cy.contains(/california/i).should('be.visible')
  })

  it('should update query strings `query` when search input changes', () => {
    cy.get('input[name=search-text]').type('killing bugs')
    cy.url().should('match', /killing.*bugs/i)
  })
})
