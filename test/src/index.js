/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const error = require("fifit-error");
const raise = require('../../');

it('must be typeof throw === "function"', () => {
  assert.ok(typeof raise === 'function');
});

it('must be typeof throw.error === "function"', () => {
  assert.ok(typeof raise.error === 'function');
});

it('must be typeof throw.clientError === "function"', () => {
  assert.ok(typeof raise.clientError === 'function');
});

it('must be typeof throw.serverError === "function"', () => {
  assert.ok(typeof raise.serverError === 'function');
});

it('must be work throw()', () => {
  try {
    raise();
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
  try {
    raise(400, '400', {foo: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ClientError);
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '400');
    assert.strictEqual(e.headers.foo, true);
  }
  try {
    raise('500', '500', {bar: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ServerError);
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '500');
    assert.strictEqual(e.headers.bar, true);
  }
  try {
    raise(399);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
  try {
    raise(600);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
});

it('must be work throw.error()', () => {
  try {
    raise.error();
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
  try {
    raise.error(400, '400', {foo: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '400');
    assert.strictEqual(e.headers.foo, true);
  }
  try {
    raise.error('500', '500', {bar: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '500');
    assert.strictEqual(e.headers.bar, true);
  }
  try {
    raise.error(399);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
  try {
    raise.error(600);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(!(e instanceof error.ClientError));
    assert.ok(!(e instanceof error.ServerError));
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
});

it('must be work throw.clientError()', () => {
  try {
    raise.clientError();
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ClientError);
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '');
  }
  try {
    raise.clientError(400, '400', {foo: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ClientError);
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '400');
    assert.strictEqual(e.headers.foo, true);
  }
  try {
    raise.clientError(500, '500', {bar: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ClientError);
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '500');
    assert.strictEqual(e.headers.bar, true);
  }
  try {
    raise.clientError(500);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ClientError);
    assert.strictEqual(e.status, 400);
    assert.strictEqual(e.message, '');
  }
});

it('must be work throw.serverError()', () => {
  try {
    raise.serverError();
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ServerError);
    assert.strictEqual(e.status, 500);
  }
  try {
    raise.serverError(500, '500', {bar: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ServerError);
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '500');
    assert.strictEqual(e.headers.bar, true);
  }
  try {
    raise.serverError(400, '400', {foo: true});
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ServerError);
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '400');
    assert.strictEqual(e.headers.foo, true);
  }
  try {
    raise.serverError(400);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof error.Error);
    assert.ok(e instanceof error.ServerError);
    assert.strictEqual(e.status, 500);
    assert.strictEqual(e.message, '');
  }
});