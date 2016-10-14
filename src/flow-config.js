/**
 *
 */
const { airbnbRules } = require('./utils');


/**
 *
 */
module.exports = {
  extends: require.resolve('./babel-config.js'),

  plugins: [
    'flowtype',
  ],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },

  rules: {
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': ['error'],
    'flowtype/delimiter-dangle': airbnbRules['comma-dangle'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': airbnbRules['no-dupe-keys'],
    'flowtype/no-weak-types': ['error', { any: false, Object: true, Function: true }],
    'flowtype/require-parameter-type': ['error', { excludeArrowFunction: 'expressionsOnly' }],
    'flowtype/require-return-type': ['error', 'always', { excludeArrowFunction: 'expressionsOnly' }],
    'flowtype/require-valid-file-annotation': ['error'],
    'flowtype/semi': airbnbRules.semi,
    'flow/sort-keys': airbnbRules['sort-keys'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/type-id-match': ['error', '^[A-Z][A-Za-z0-9]*[a-z0-9]$'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': ['error'],
  },
};
