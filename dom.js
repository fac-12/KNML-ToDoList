
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false},
  ];

  // createTodo Node function
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var span = document.createElement('span');
    var todoText = document.createTextNode(todo.description);
      todoNode.className = 'todo-item';
      todoText.className = 'todoText';
      if (todo.done == true) {
        span.classList.add("strikethrough");
      } else {
          span.classList.remove("strikethrough");
      }
    span.appendChild(todoText);
    todoNode.appendChild(span);

    // adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className = 'delete-btn';
    var deleteText = document.createTextNode('✘');
    deleteButtonNode.appendChild(deleteText);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // adds the markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.className = 'markTodo-btn';

    // markTodoButtonNode.id = 'markBtn'
    var markText = document.createTextNode('✔');
    markTodoButtonNode.appendChild(markText);
    markTodoButtonNode.addEventListener('click', function(event) {

      var newState = todoFunctions.markTodo(state, todo.id);

    update(newState);

    });
    todoNode.appendChild(markTodoButtonNode);
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      var todos = {};
      event.preventDefault();
      todos.description = event.target.description.value;
      todos.done = false;
      var newState = todoFunctions.addTodo(state, todos); // ?? change this!
      update(newState);
      event.target[0].value = "";
    });

  }
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
