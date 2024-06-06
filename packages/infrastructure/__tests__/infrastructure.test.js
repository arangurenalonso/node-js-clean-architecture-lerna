'use strict';

const infrastructure = require('..');
const assert = require('assert').strict;

assert.strictEqual(infrastructure(), 'Hello from infrastructure');
console.info('infrastructure tests passed');
