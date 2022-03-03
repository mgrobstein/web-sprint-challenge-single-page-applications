describe('My First Test', function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })
const nameInput = () => cy.get('input[name=name-input]')
const toppingsInput = () => cy.get('[type="checkbox"]')
// // const pepperoniInput = () => cy.get('input[name=pepperoni]')
// // const extraCheeseInput = () => cy.get('input[name=extraCheese]')
// // const sausageInput = () => cy.get('button[input[name="sausage"]')
// // const mushroomInput = () => cy.get('input[name=mushroom]')
const submitButton = () => cy.get('button[id="order-button"]')

    it('can type in the inputs', () => {
        nameInput()
        // .should('have.value', '')
        .type('Be nice to the CSS expert')
        .should('have.value', 'Be nice to the CSS expert')
    })
    it('can select multiple toppings', () => {
        // pepperoniInput()
        // .click()
        // .should('have.value', 'on');
        // extraCheeseInput()
        // .click()
        // .should('have.value', 'on');
        // sausageInput()
        // .click()
        // .should('have.value', 'on');
        // mushroomInput()
        // .click()
        // .should('have.value', 'on');
        toppingsInput().check().should('have.value', 'true')
    })
    it('can submit the form', () => {
        submitButton()
        .click()
    })

    it('sanity check to make sure tests work', ()=>{
    expect(1+2).to.equal(3)
    expect(2+2).not.to.equal(5)
    expect({}).not.to.equal({})
    expect({}).not.to.eql({})
})
// it('the proper elements are showing', ()=>{
//     textInput().should('exist')
//     foobarInput().should('not.exist')
//     authorInput().should('exist')
//     submitBtn().should('exist')
//     cancelBtn().should('exist')
//     cy.contains('Submit Quote').should('exist')
//     cy.contains(/submit quote/i).should('exist')
// })
// describe('Filling out the inputs and cancelling', () => {
//     it('can navigate to site', () => {
//         cy.url().should('include', 'localhost')
//     })
//     it('submit button start out disabled', () =>
//     {
//         submitBtn().should('be.disabled')
//     })
})

