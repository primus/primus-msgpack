'use strict';

module.exports = {
  mode: 'none',
  entry: './browser.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'bundle.js',
    library: 'msgpack',
    path: __dirname
  },
  target: 'es5'
};
