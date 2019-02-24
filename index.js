'use strict';

// Only run if this is being run client side.
if (typeof Java === "undefined" && typeof document !== "undefined") {
  module.exports = require('./js/accessibility.js');
}
