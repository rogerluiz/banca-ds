const eslintConfig = require('@vr/frontend-boilerplate/web/eslint');

module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'react/function-component-definition': 'off',
  },
};
