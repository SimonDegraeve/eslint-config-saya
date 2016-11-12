/**
 *
 */
import { CLIEngine } from 'eslint';
import config from '../babel-config';


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
    export x from 'module';
  `);
  expect(result.errorCount).toBe(0);
  expect(result.warningCount).toBe(0);
});
