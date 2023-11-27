module.exports = {
    root: true,
    env: {
      node: true,
      es6:true,
      browser:true
    },
    extends: ["eslint:recommended"],
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
    },
    plugins: ['import']
  };
  