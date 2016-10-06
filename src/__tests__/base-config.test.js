/**
 *
 */
import { CLIEngine } from 'eslint';
import config from '../base-config';


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
    let a = 1;
    if (a === 1) {
      a = 2;
    } else {
      a = 3;
    }
  `);

  expect(result.errorCount).toBe(1);
  expect(result.warningCount).toBe(0);
  expect(result.messages[0].ruleId).toBe('brace-style');
});
