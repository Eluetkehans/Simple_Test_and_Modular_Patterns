'use strict';
var name = process.argv[2];
var greet = module.exports = exports = function(name) {
  if (name) {
    console.log('hello ' + name);
    return 'hello ' + name;
  }
  return 'hello world';
};

greet(name);