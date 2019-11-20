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
'use strict';

const error = require("fifit-error");

/**
 * @param {(number|string)} [status]
 * @param {string} [message]
 * @param {Object} [headers]
 * @throws {Error}
 */
module.exports = (status, message, headers) => {
  if (error.codes[status |= 0]) {
    throw new error.codes[status](message, headers);
  }
  throw new error.Error(status, message, headers);
};

/**
 * @param {(number|string)} [status]
 * @param {string} [message]
 * @param {Object} [headers]
 * @throws {Error}
 */
module.exports.error = (status, message, headers) => {
  throw new error.Error(status, message, headers);
};

/**
 * @param {(number|string)} [status]
 * @param {string} [message]
 * @param {Object} [headers]
 * @throws {Error}
 */
module.exports.clientError = (status, message, headers) => {
  throw new error.ClientError(status, message, headers);
};

/**
 * @param {(number|string)} [status]
 * @param {string} [message]
 * @param {Object} [headers]
 * @throws {Error}
 */
module.exports.serverError = (status, message, headers) => {
  throw new error.ServerError(status, message, headers);
};