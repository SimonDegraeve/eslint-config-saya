/**
 *
 */
module.exports = {
  extends: 'airbnb-base',

  env: {
    jest: true,
  },

  rules: {
    'no-underscore-dangle': ['off'],
    'global-require': ['off'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js'] }],
  },
};
