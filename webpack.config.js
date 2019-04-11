'use strict';

module.exports = {
  mode: 'production',
  entry: './browser.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'bundle.js',
    library: 'msgpack',
    path: __dirname
  }
};
