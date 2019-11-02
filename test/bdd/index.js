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
const throws = require('../../');

/**
 */
describe('index', () => {
	/**
	 */
	it('typeof(throw) === "function"', () => {
		assert.ok(typeof throws === 'function');
	});

	/**
	 */
	it('typeof(throw.error) === "function"', () => {
		assert.ok(typeof throws.error === 'function');
	});
	
	/**
	 */
	it('typeof(throw.clientError) === "function"', () => {
		assert.ok(typeof throws.clientError === 'function');
	});
	
	/**
	 */
	it('typeof(throw.serverError) === "function"', () => {
		assert.ok(typeof throws.serverError === 'function');
	});

	/**
	 */
	it('throw()', () => {
		try {
			throws();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
		try {
			throws(400, '400', {foo: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ClientError);
			assert.strictEqual(e.status, 400);
			assert.strictEqual(e.message, '400');
			assert.strictEqual(e.headers.foo, true);
		}
		try {
			throws('500', '500', {bar: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ServerError);
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '500');
			assert.strictEqual(e.headers.bar, true);
		}
		try {
			throws(399);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
		try {
			throws(600);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
	});

	/**
	 */
	it('throw.error()', () => {
		try {
			throws.error();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
		try {
			throws.error(400, '400', {foo: true});
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
			throws.error('500', '500', {bar: true});
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
			throws.error(399);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
		try {
			throws.error(600);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(!(e instanceof error.ClientError));
			assert.ok(!(e instanceof error.ServerError));
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
	});

	/**
	 */
	it('throw.clientError()', () => {
		try {
			throws.clientError();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ClientError);
			assert.strictEqual(e.status, 400);
			assert.strictEqual(e.message, '');
		}
		try {
			throws.clientError(400, '400', {foo: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ClientError);
			assert.strictEqual(e.status, 400);
			assert.strictEqual(e.message, '400');
			assert.strictEqual(e.headers.foo, true);
		}
		try {
			throws.clientError(500, '500', {bar: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ClientError);
			assert.strictEqual(e.status, 400);
			assert.strictEqual(e.message, '500');
			assert.strictEqual(e.headers.bar, true);
		}
		try {
			throws.clientError(500);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ClientError);
			assert.strictEqual(e.status, 400);
			assert.strictEqual(e.message, '');
		}
	});
	
	/**
	 */
	it('throw.serverError()', () => {
		try {
			throws.serverError();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ServerError);
			assert.strictEqual(e.status, 500);
		}
		try {
			throws.serverError(500, '500', {bar: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ServerError);
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '500');
			assert.strictEqual(e.headers.bar, true);
		}
		try {
			throws.serverError(400, '400', {foo: true});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ServerError);
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '400');
			assert.strictEqual(e.headers.foo, true);
		}
		try {
			throws.serverError(400);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof error.Error);
			assert.ok(e instanceof error.ServerError);
			assert.strictEqual(e.status, 500);
			assert.strictEqual(e.message, '');
		}
	});
});