const { ANALYZE, NODE_ENV } = process.env;

//
module.exports = {
  distDir: '../dist',
  useFileSystemPublicRoutes: false,

  //
  webpack(config) {
    if (ANALYZE && NODE_ENV !== 'production') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return {
      ...config,
      node: {
        fs: 'empty',
      },
    };
  },
};
