/**
 *
 */
import { CLIEngine } from 'eslint';
import config from '../flow-config';


/**
 *
 */
test('exports a valid ESLint configuration', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config,
  });

  const { results: [result] } = cli.executeOnText(`
    /* eslint-disable no-trailing-spaces, eol-last */
    /* @flow */
    export type mytype = {};
  `);

  expect(result.errorCount).toBe(1);
  expect(result.warningCount).toBe(0);
  expect(result.messages[0].ruleId).toBe('flowtype/type-id-match');
});
