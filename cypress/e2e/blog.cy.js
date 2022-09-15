describe("Blog", function() {
  it("front page can be opened", function() {
    cy.visit("http://localhost:3000")
    cy.contains("Sky")
    cy.contains("sky is blue")
    cy.contains("Child Blog")
  })

  it("can search and click", function() {
    cy.get("#button").click()
    cy.contains("UnFavorite")
    cy.get("#header-search").type("Space")
    cy.get("#search").click()
    cy.contains("Space")
  })

  it("navigate to other pages", function() {
    cy.contains("Add Blog").click()
    cy.contains("Add Blog Entry")
    cy.contains("Blog Title")
    cy.contains("Blog Image")
    cy.contains("Blog Description")
    cy.contains("Favorite Blog").click()
    cy.contains("My Favorites")
  })


})