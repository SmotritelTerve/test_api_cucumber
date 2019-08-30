const assert = require('assert');
const { Before, Given, When, Then} = require('cucumber');
const User = require('../../lib/user');
const requests = require('../../lib/requests');

// use generatedRandomPrefix in the future tests
// const generatedRandomPrefix = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

let user;
let receivedUser;
let updatedUser;
let responseMessage;

Given(/^the user name "([^"]*)" and email "([^"]*)" and password "([^"]*)"$/, function (name, email, password) {
    user = new User(name, email, password);
  });

When(/^they are sent in POST request to user endpoint$/, async function () {
  user.id = await requests.sendPost(user);
  });

When(/^then send GET request to users endpoint "([^"]*)"$/, function (uriUsers) {
    requests.sendGet(uriUsers);
  });

Then(/^user with email "([^"]*)" should be in the list of users$/, async function (email) {
    ifExists = await requests.verifyUserEmail(email);
    assert.equal(ifExists, true);
  });

  When(/^send GET request to get the user by id$/, async function () {
    receivedUser = await requests.getUserById(user.id);
  });

  Then(/^the user with name "([^"]*)" and email "([^"]*)" should be in the response$/, function (name, email) {
    assert.equal(receivedUser.name, name);
    assert.equal(receivedUser.email, email);
  });

  When(/^send DELETE request to delete the user by id$/, async function () {
    responseMessage = await requests.deleteUserById(user.id);
  });

  Then(/^the response message should be "([^"]*)"$/, async function (message) {
    assert.equal(responseMessage, message);
  });

  Then(/^user with email "([^"]*)" should not be in the list of users$/, async function (email) {
    ifExists = await requests.verifyUserEmail(email);
    assert.equal(ifExists, false);
  });

  When(/^new user name "([^"]*)" and email "([^"]*)" sent in PATCH by id$/, async function (nameUpdated, emailUpdated) {
    updatedUser = new User(nameUpdated, emailUpdated);
    responseMessage = await requests.updateUserById(user.id, updatedUser);
  });