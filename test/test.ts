import test = require('blue-tape');

import klaw = require('klaw');

test('klaw exists', (t) => {
  t.plan(1);
  t.notEquals(klaw, undefined);
});
