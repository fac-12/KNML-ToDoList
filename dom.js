// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false},
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var span = document.createElement('span');
    var todoText = document.createTextNode(todo.description);
      todoNode.className = 'todo-item';
      todoText.className = 'todoText strikethrough';
    span.appendChild(todoText);
    todoNode.appendChild(span);
    //We need to add our todo logic in here, so that it follows onto the things

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className = 'delete-btn';
      var deleteText = document.createTextNode('✘');
      deleteButtonNode.appendChild(deleteText);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.className = 'markTodo-btn';
    markTodoButtonNode.id = 'markBtn'
    var markText = document.createTextNode('✔');
    markTodoButtonNode.appendChild(markText);
    markTodoButtonNode.addEventListener('click', function(event) {
      
      var newState = todoFunctions.markTodo(state, todo.id);
      if (span.classList.contains("strikethrough")) {
        span.classList.remove("strikethrough");
        todo.done = false;
        console.log(span.classList);
      } else {
          span.classList.add("strikethrough");
          todo.done= true;
      }
    // update(newState);

    });
    todoNode.appendChild(markTodoButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      var todos = {};
      event.preventDefault();
      todos.description = event.target.description.value;
      todos.done = false;
      // event.target ....
      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, todos); // ?? change this!
      update(newState);
      event.target[0].value = "";
    });

  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
