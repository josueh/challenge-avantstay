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
    cy.get('input[name="region"] + div').click()
    cy.contains(`Malibu`).click()
    cy.get('main').contains('Malibu, CA').should('be.visible')
  })

  it('should render 404 page when "region" does not exist', () => {
    const regionName = 'NoWhere'
    cy.visit(`/regions/${regionName}`)
    cy.get('main')
      .contains(/Oops.*Try something else/i)
      .should('be.visible')
  })
})
