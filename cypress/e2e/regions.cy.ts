describe('Regions', () => {
  it('should render "region name" when visiting "/regions/:regionName"', () => {
    const regionName = 'Malibu'
    cy.visit(`/regions/${regionName}`)
    cy.get('main')
      .contains(/malibu/i)
      .should('be.visible')
  })

  it('should render "Bedrooms" information', () => {
    const regionName = 'Breckenridge'
    cy.visit(`/regions/${regionName}`)
    cy.get('main')
      .contains(/\d+\sbedrooms/i)
      .should('be.visible')
  })

  it('should change "region" by select option on the header', () => {
    cy.visit(`/`)
    cy.get('header select[name="region"]').select('Malibu')
    cy.get('main').contains('Malibu, CA').should('be.visible')
  })
})
