module.exports = {
    entry: {
      background: 'apps/app-web-extension/src/background.ts',
      'content': 'apps/app-web-extension/src/content.ts',
    },
    optimization: {
      runtimeChunk: false,
    },
  };