var test = require('tape');
var logic = require('../logic.js');

test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one');
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
