/**
 *
 */
const bestPractises = require('eslint-config-airbnb-base/rules/best-practices');
const errors = require('eslint-config-airbnb-base/rules/errors');
const node = require('eslint-config-airbnb-base/rules/node');
const style = require('eslint-config-airbnb-base/rules/style');
const variables = require('eslint-config-airbnb-base/rules/variables');
const es6 = require('eslint-config-airbnb-base/rules/es6');
const imports = require('eslint-config-airbnb-base/rules/imports');


/**
 *
 */
module.exports.airbnbRules = Object.assign({},
  bestPractises.rules,
  errors.rules,
  node.rules,
  style.rules,
  variables.rules,
  es6.rules,
  imports.rules,
);
