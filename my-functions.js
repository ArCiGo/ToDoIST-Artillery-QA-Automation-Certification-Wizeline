'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  const generatedContent = Faker.lorem.word();
  const generatedDueDate = Faker.date.recent();

  const formattedDate = generatedDueDate.toISOString().split('T')[0];
  // add variables to virtual user's context:
  userContext.vars.generatedContent = generatedContent;
  userContext.vars.formattedDate = formattedDate;
  // continue with executing the scenario:
  return done();
}