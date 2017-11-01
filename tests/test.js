var test = require('tape');
var logic = require('../logic.js');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ];



test('output is an array', function(t) {
  t.equal(Array.isArray(logic.deleteTodo(state, "-2")), true, "typeof output should be an array");
  t.end();
});

test('array length is one less than input length', function(t) {
  t.equal((logic.deleteTodo(state, "-2")).length, 2, "length of array should be one less than input length");
  t.end();
});
