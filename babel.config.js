module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-typescript' // Добавляем поддержку TypeScript
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }], // Добавляем поддержку декораторов
    ['@babel/plugin-proposal-class-properties', { 'loose': true }] // Добавляем поддержку свойств классов
  ]
}
