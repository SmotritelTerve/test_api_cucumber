Feature: Add, get, delete a user

    Add, get, delete auser to the test API app

    Scenario: Add, get, delete a user to /api/user
        Given the user name "morpheus" and email "morpheus-overlord@mailinator.com" and password "test123"
        When they are sent in POST request to user endpoint
        Then user with email "morpheus-overlord@mailinator.com" should be in the list of users
        When send GET request to get the user by id
        Then the user with name "morpheus" and email "morpheus-overlord@mailinator.com" should be in the response
