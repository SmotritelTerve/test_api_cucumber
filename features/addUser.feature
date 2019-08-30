Feature: Add, get, update and delete a user

    Add a user to the test API app, get, update and then delete the user

    Scenario: Add, get, update, delete a user
        Given the user name "morpheus" and email "morpheus-overlord@mailinator.com" and password "test123"
        When they are sent in POST request to user endpoint
        Then user with email "morpheus-overlord@mailinator.com" should be in the list of users
        When send GET request to get the user by id
        Then the user with name "morpheus" and email "morpheus-overlord@mailinator.com" should be in the response
        When new user name "morpheus-updated" and email "morpheus-updated@mailinator.com" sent in PATCH by id
        Then the response message should be "success"
        When send GET request to get the user by id
        Then the user with name "morpheus-updated" and email "morpheus-updated@mailinator.com" should be in the response
        When send DELETE request to delete the user by id
        Then the response message should be "deleted"
        And user with email "morpheus-overlord@mailinator.com" should not be in the list of users
