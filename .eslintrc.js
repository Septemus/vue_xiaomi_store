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
    rules:{
      "no-debugger":0,
      "no-dupe-keys":0,
      "no-unused-vars":0
    },
    plugins: ['import']
};
  