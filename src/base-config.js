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
    'no-use-before-define': ['warn'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'import/prefer-default-export': ['off'],
    'import/imports-first': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.js', '**/__mocks__/**', '**/__fixtures__/**'],
    }],
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
};
