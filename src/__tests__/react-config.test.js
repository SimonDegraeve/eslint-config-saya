/**
 *
 */
import { CLIEngine } from 'eslint';
import config from '../react-config';


/**
 *
 */
test('exports a valid ESLint configuration', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config,
  });

  const { results: [result] } = cli.executeOnText(`
    /* eslint-disable no-trailing-spaces, eol-last, import/no-extraneous-dependencies */
    import React from 'react';
    
    (() => <div boolean={true} />)();
  `);
  expect(result.errorCount).toBe(1);
  expect(result.warningCount).toBe(0);
  expect(result.messages[0].ruleId).toBe('react/jsx-boolean-value');
});
