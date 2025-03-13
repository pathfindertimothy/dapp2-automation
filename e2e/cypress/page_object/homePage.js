export default class HomePageObject {
    elements = {
        connectToSepoliaButton: () => cy.get('[data-test="MetaMaskConnector__Button__connect"]'),
        erc20TokenInputField: () => cy.get('[data-test="InputAddress__Input__addressValue"]'),
        accountAddress: () => cy.get('[data-test="MetaMaskConnector__Div__connect"]'),
        inputAddresssubmitButton: () => cy.get('[data-test="InputAddress__Button__submit"]'),
        tokenBalance: () => cy.get('[data-test="TokenBalance__Div__balanceAmount"]'),
        depositInputFiled: () => cy.get('[data-test="DepositToken__Input__depositAmount"]'),
        depositButton: () => cy.get('[data-test="DepositToken__Button__deposit"]'),
        approveToken: () => cy.get('#approveTokens')
    }

    pageUrl() {
        cy.visit("/")
    }

    clickConnectToSepolia() {
        this.elements.connectToSepoliaButton().click()
    }

    typeAddress(address) {
        this.elements.erc20TokenInputField().type(address)
    }

    clickTheSubmitButton() {
        this.elements.inputAddresssubmitButton().click()
    }

    typeDepositAmount(depositAmount) {
        this.elements.depositInputFiled().type(depositAmount)
    }

    clickTheDepositButton() {
        this.elements.depositButton().click()
    }

}