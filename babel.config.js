module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: 'usage',
        corejs: 3
      },
    ],

  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    '@babel/plugin-proposal-nullish-coalescing-operator', // 双问号
    '@babel/plugin-proposal-optional-chaining' // 可选链
  ]
}
