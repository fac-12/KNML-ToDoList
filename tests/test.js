var test = require('tape');
var logic = require('../logic.js');


test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one');
t.end();
};


  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ];

test('input array has not been altered', function(t) {
    t.deepEqual(state, [
      { id: -3, description: 'first todo' },
      { id: -2, description: 'second todo' },
      { id: -1, description: 'third todo' },
    ], "input array should not be altered");
    t.end();
});

test('output is an array', function(t) {
  t.equal(Array.isArray(logic.deleteTodo(state, -2)), true, "typeof output should be an array");
  t.end();
});

test('array length is one less than input length', function(t) {
  t.equal((logic.deleteTodo(state, -2)).length, 2, "length of array should be one less than input length");
  t.end();
});

test('check add to do', function(t) {
  var actual = logic.addTodo(todos, newTodo);
  var expected = [
    {
      id: -1,
      description: "smash avocados",
      done: true,
  },
   {
     id: 0,
     description: "make coffee",
     done: false,
   },
   {
     id: 1,
     description: "new2",
     done: true,
   },
  ];
  t.deepEqual(actual, expected, 'new obj added to the array');
  t.end();
});

var todos = [
  {
    id: -1,
    description: "smash avocados",
    done: true,
},

 {
   id: 0,
   description: "make coffee",
   done: false,
 },
];

var newTodo =
  {
    description: "new2",
    done: true,
  };
