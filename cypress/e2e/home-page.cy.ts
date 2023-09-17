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

  it('should render "Where" filter with default value "Any region"', () => {
    cy.contains('header', 'Any region').should('be.visible')
  })

  it('should render "Order" filter with default value "Relevance"', () => {
    cy.contains('header', 'Relevance').should('be.visible')
  })
})
