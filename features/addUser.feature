Feature: Add user

    Add user to the test API app /api/user

    Scenario: Add a user to /api/user
        Given the user name "morpheus" and email "morpheus-overlord@mailinator.com" and password "test123"
        When they are sent in POST request to user endpoint "http://localhost:8000/api/user/"
        # And then send GET request to users endpoint "http://localhost:8000/api/users/"
        Then user with email "morpheus-overlord@mailinator.com" should be in the list of users