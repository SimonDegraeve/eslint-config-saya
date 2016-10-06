/**
 *
 */
const { airbnbRules } = require('./utils');


/**
 *
 */
module.exports = {
  extends: require.resolve('./base-config.js'),
  parser: 'babel-eslint',

  plugins: [
    'babel',
  ],

  rules: {
    // Core rules
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': airbnbRules['generator-star-spacing'],

    'new-cap': 'off',
    'babel/new-cap': airbnbRules['new-cap'],

    'array-bracket-spacing': 'off',
    'babel/array-bracket-spacing': airbnbRules['array-bracket-spacing'],

    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': airbnbRules['object-curly-spacing'],

    // Cannot use 3rd argument.
    // See https://github.com/babel/eslint-plugin-babel/issues/63
    'object-shorthand': 'off',
    'babel/object-shorthand': [
      airbnbRules['object-shorthand'][0],
      airbnbRules['object-shorthand'][1],
    ],

    // Cannot use 3rd argument.
    // See https://github.com/babel/eslint-plugin-babel/issues/63
    'arrow-parens': 'off',
    'babel/arrow-parens': [
      airbnbRules['arrow-parens'][0],
      airbnbRules['arrow-parens'][1],
    ],

    // Specific rules
    'babel/no-await-in-loop': ['error'],
    'babel/flow-object-type': ['error', 'comma'],
    'babel/func-params-comma-dangle': airbnbRules['comma-dangle'],
  },
};
