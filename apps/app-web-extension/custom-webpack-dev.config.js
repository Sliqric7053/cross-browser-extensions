const config = require('./custom-webpack.config.js')
const ExtensionReloader = require('webpack-extension-reloader')

module.exports = {
  ...config,
  mode: 'development',
  plugins: [
    new ExtensionReloader({
      reloadPage: true,
      entries: {
        background: 'apps/app-web-extension/src/background.ts',
        // 'content-script': 'apps/app-web-extension/src/content-script.ts',
      },
    }),
  ],
}