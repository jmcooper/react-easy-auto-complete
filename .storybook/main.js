const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.story.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: { localIdentName: '[name]__[local]___[hash:base64:5]' } } },
        { loader: 'sass-loader' },
      ],
      include: path.resolve(__dirname, '../src'),
    });
  
    return config;
  }
}