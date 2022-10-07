import localStoreMock from '../__mock__/localStorageMock.js';

export default class Tasks {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStoreMock.data = this.list;
  }

  removeTodo(todoID) {
    const removeTemp = this.list.filter((todo) => todo.id !== todoID);
    removeTemp.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.list = removeTemp;
    localStoreMock.data = this.list;
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === Number(todoId)) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStoreMock.data = this.list;
  }

  isCompletedStatus(todoId, status) {
    const checked = this.list.findIndex((element) => element.id === Number(todoId));
    this.list[checked].isCompleted = status;
    localStoreMock.data = this.list;
  }

  clearAllCompletedTask() {
    this.list = this.list.filter((todo) => !todo.isCompleted);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStoreMock.data = this.list;
  }
}
