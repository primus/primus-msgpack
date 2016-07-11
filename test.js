describe('primus-msgpack', () => {
  'use strict';

  const msgpack = require('msgpack-lite');
  const assert = require('assert');
  const path = require('path');
  const fs = require('fs');

  const mpack = require('.');

  it('exports the server-side component', () => {
    assert.strictEqual(mpack, msgpack);
  });

  it('exports the client-side component', () => {
    const source = fs.readFileSync(path.join(__dirname, 'bundle.js'), {
      encoding: 'utf-8'
    });

    assert.strictEqual(mpack.BrowserSource, source);
  });
});
