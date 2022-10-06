import localStoreMock from '../__mock__/remove';

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
}
