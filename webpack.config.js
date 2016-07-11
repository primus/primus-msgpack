'use strict';

module.exports = {
  entry: './browser.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'bundle.js',
    library: 'msgpack'
  }
};
