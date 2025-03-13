import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePageObject from '../../page_object/homePage'
import { constantVariable } from '../../constants/constants'
import 'cypress-mochawesome-reporter/register'

const homePageObject = new HomePageObject()

Given("A user with metamask installed access the dapp page", () => {
    homePageObject.pageUrl()
    cy.connectToDapp()
})

When("the user click on connect metamask to sepolia button", () => {
    homePageObject.clickConnectToSepolia()    
})

When("the user confirm to switch to sepolia", () => {
     const targetNetwork = 'Sepolia'
     cy.switchNetwork(targetNetwork, true).then(() => {
       cy.getNetwork().should('eq', targetNetwork)
     })
})

Then("the address should begin with {string}", (address) => {
    homePageObject.elements.accountAddress().should('contain', address)
})

Then("the ERC20 address field should be visible", () => {
    homePageObject.elements.erc20TokenInputField().should('be.visible')
})

Then("the user type in the ERC20 token", () => {
    homePageObject.typeAddress(constantVariable.erc20Address)
})

Then("the user click the submit button", () => {
    homePageObject.clickTheSubmitButton()
})

Then("the token balance should be displayed", () => {
    homePageObject.elements.tokenBalance().should(($p) => {
        expect($p).not.to.be.empty
    })
})

Then('enter deposit amount as {string}', (amount) => {
    homePageObject.typeDepositAmount(amount)
})

Then('the user click the deposit button', () => {
    homePageObject.clickTheDepositButton()
})

// Test for: Test the token transfer process from the wallet to the smart contract
// This stoppped at .approveToken() since the gas fee is high and not enough fund
// Then('The user click the mint token button to transfer', () => {
//     cy.get('[data-test="TokenBalance__Div__getMoreExampleTokensAction"]').click()
//     cy.deployToken().then(() => {
//         cy.wait(10000) // for testing purpose
//         homePageObject.elements.approveToken()

//         cy.approveTokenPermission({
//         spendLimit: 10,
//         gasSetting: {
//             maxBaseFee: 5,
//             priorityFee: 5,
//             gasLimit: 1_000
//         }
//         })
//     })
// })