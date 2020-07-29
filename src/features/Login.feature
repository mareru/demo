Feature: Login
    Test login process

    Scenario: Login with valid credentials
        Given I visit home page
        When I navigate to login page
        And I enter valid credentials
        Then I can see my username displayed on the page
