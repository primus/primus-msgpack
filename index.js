'use strict';

const msgpack = require('msgpack-lite');
const path = require('path');
const fs = require('fs');

msgpack.BrowserSource = fs.readFileSync(path.join(__dirname, 'bundle.js'), {
  encoding: 'utf-8'
});

module.exports = msgpack;
