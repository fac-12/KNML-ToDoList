var test = require('tape');
var logic = require('../logic.js');

  var testArr = [
    { id: -3, description: 'first todo', done: true},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false},
  ];

// tests for deleteToDo function

test('input array has not been altered', function(t) {
    t.deepEqual(testArr, [
      { id: -3, description: 'first todo', done: true},
      { id: -2, description: 'second todo', done: false},
      { id: -1, description: 'third todo', done: false},
    ], "input array should not be altered");
    t.end();
});

test('output is an array', function(t) {
  t.equal(Array.isArray(logic.deleteTodo(testArr, -2)), true, "typeof output should be an array");
  t.end();
});

test('array length is one less than input length', function(t) {
  t.equal((logic.deleteTodo(testArr, -2)).length, 2, "length of array should be one less than input length");
  t.end();
});

// tests for markTodo function

test('input array has not been altered', function(t) {
    t.deepEqual(testArr, [
      { id: -3, description: 'first todo', done: true},
      { id: -2, description: 'second todo', done: false},
      { id: -1, description: 'third todo', done: false},
    ], "input array should not be altered");
    t.end();
});

test('output is an array', function(t) {
  t.equal(Array.isArray(logic.markTodo(testArr, -2)), true, "typeof output should be an array");
  t.end();
});

test('Element with idToMark done value will be toggled', function(t) {
  t.equal(logic.markTodo(testArr, -2)[1].done, true, "done value should be toggled");
  t.end();
});
