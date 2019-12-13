// Modeled on create-react-app preset
// https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app

module.exports = {
  presets: [
    [
      '@jitesoft/main',
      {
        useBuiltIns: 'entry'
      }
    ],
    ['@babel/preset-react', { useBuiltIns: true }]
  ]
};
