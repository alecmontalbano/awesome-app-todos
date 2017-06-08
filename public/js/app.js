/*jshint esversion:6*/

const TodoApp = {
  rootElement: '#app',
  todos: [{task: 'get some milk', isComplete: false}],
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.addButton = this.root.querySelector('.add-button');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  bindEvents: function(){
    this.addButton.addEventListener('click', () => console.log('add'));

  },
  render: function(){
    const lis = this.todos
                    .map(todo => `<li>${todo.task}</li>`)
                    .join();
    this.todoList.innerHTML = lis;
  }
};

TodoApp.start();
