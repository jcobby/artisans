module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {
        jsxImportanceSource: 'nativewind',
      }],
      "nativewind/babel",
    ],
    plugins: [
      'react-native-reanimated/plugin', 
    ],
  };
};