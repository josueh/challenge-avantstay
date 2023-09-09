describe('Regions', () => {
  it('should render "region name" when visit "/regions/:regionName"', () => {
    const regionName = 'Malibu'
    cy.visit(`/regions/${regionName}`)
    cy.contains(regionName).should('be.visible')
  })
})
