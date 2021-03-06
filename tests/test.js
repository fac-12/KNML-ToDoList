var test = require('tape');
var logic = require('../logic.js');

test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one');
t.end();
});

  var testArr = [
    { id: -3, description: 'first todo', done: true},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false},
  ];
  var newTodoTest =
    { description: "new2", done: true};

// tests for deleteToDo function

test('output is an array', function(t) {
  t.equal(Array.isArray(logic.deleteTodo(testArr, -2)), true, "typeof output should be an array");
  t.end();
});

test('array length is one less than input length', function(t) {
  t.equal((logic.deleteTodo(testArr, -2)).length, 2, "length of array should be one less than input length");
  t.end();
});

// tests for markTodo function

test('output is an array', function(t) {
  t.equal(Array.isArray(logic.markTodo(testArr, -2)), true, "typeof output should be an array");
  t.end();
});

test('Element with idToMark done value will be toggled', function(t) {
  t.equal(logic.markTodo(testArr, -2)[1].done, true, "done value should be toggled");
  t.end();
});

// tests for addTodo function

test('addTodo returns an array', function(t) {
  t.equal(Array.isArray(logic.addTodo(testArr, newTodoTest)), true, 'Addtodo should return an array');
  t.end();
});
test('Addtodo returns an object with newTodo added', function(t){
  t.equal(logic.addTodo(testArr, newTodoTest).length, testArr.length +1, "Addtodo returns an object with newTodo added");
  t.end();
});
//need to find a method to use on the object that checks for id
// test('Addtodo generates a new id', function(t){
//   t.equal(logic.addTodo(testArr, newTodoTest)[logic.addTodo(testArr, newTodoTest).length + 1].hasOwnProperty("id"), true, "Addtodo generates a new id");
//   t.end();
// });
