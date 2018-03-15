// this file isn't transpiled, so must use CommonJS and ES5

// register Babel to transpile before our tests run
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
