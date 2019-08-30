const assert = require('assert');
const { Before, Given, When, Then} = require('cucumber');
const User = require('../../lib/user');
const requests = require('../../lib/requests');

const generateRandomPrefix = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);


let user;

Given(/^the user name "([^"]*)" and email "([^"]*)" and password "([^"]*)"$/, function (name, email, password) {
    user = new User(generateRandomPrefix + name, generateRandomPrefix + email, password);
  });

When(/^they are sent in POST request to user endpoint "([^"]*)"$/, function (uriUser) {
  requests.sendPost(uriUser, user);
  });

When(/^then send GET request to users endpoint "([^"]*)"$/, function (uriUsers) {
    requests.sendGet(uriUsers);
  });

Then(/^user name "([^"]*)" should be in the list of users$/, async function (name) {
    ifExists = await requests.verifyUserName(generateRandomPrefix + name);
    assert.equal(ifExists, true)
  });