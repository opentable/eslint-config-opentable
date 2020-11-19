/**
 * This file doesn't actually get run, just linted.
 */
import fs from 'fs';
import path from 'path';
import base from './base';

function test() {}

const files = {
  base,
  path,
  fs
};

fs.readdirSync(path.join(__dirname, '../rules')).forEach((name) => {
  if (name === 'react.js') {
    return;
  }

  files[name] = `../rules/${name}`;
});

Object.keys(files).forEach((name) => {
  const config = files[name];

  test(`${name}: does not reference react`, (t) => {
    t.plan(2);

    t.notOk(config.plugins, 'plugins is unspecified');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules)
      .filter((ruleId) => ruleId.indexOf('react/') == null);

    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
