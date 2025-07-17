const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

// تعديل الامتدادات
defaultConfig.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  ...defaultConfig.transformer,
};

defaultConfig.resolver = {
  assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  ...defaultConfig.resolver,
};

const config = {};

module.exports = mergeConfig(defaultConfig, config);
