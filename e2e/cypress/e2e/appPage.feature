Feature: The application works only with the Sepolia network

    Scenario: A user accesses the dapp page with Metamask and perform operations
        Given A user with metamask installed access the dapp page
        When the user click on connect metamask to sepolia button
        When the user confirm to switch to sepolia
        Then the address should begin with "0x"
        Then the ERC20 address field should be visible
        Then the user type in the ERC20 token
        Then the user click the submit button
        Then the token balance should be displayed
        Then enter deposit amount as "5"
        Then the user click the deposit button
        # Then The user click the mint token button to transfer