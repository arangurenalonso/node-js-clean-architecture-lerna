'use strict';

const application = require('..');
const assert = require('assert').strict;

assert.strictEqual(application(), 'Hello from application');
console.info('application tests passed');
