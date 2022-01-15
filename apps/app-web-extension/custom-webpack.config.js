module.exports = {
    entry: {
      background: 'apps/app-web-extension/src/background.ts',
    //   'content-script': 'apps/app-web-extension/src/content-script.ts',
    },
    optimization: {
      runtimeChunk: false,
    },
  };