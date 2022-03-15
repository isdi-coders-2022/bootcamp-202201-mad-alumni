module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  sourceType: 'module',
  extends: [
    'airbnb-base',
    'plugin:prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    
  },
  rules: {
    'prettier/prettier': 'warn',
    "no-console": "off"
  },
};
