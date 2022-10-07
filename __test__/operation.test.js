import { localStoreMock, task } from './task.test.js';

const clearAllChecked = `
<div class="clear-all">
  <a href="" class="clear-btn"></a>
</div>
`;

describe('Todo List operations', () => {
  document.body.insertAdjacentHTML('beforeend', clearAllChecked);
  // Edit todo task value (edit)
  test('Todo list description should change from "selma" to "Justice"', () => {
    const todoEditValue = document.querySelector('.task-text');

    expect(todoEditValue.value).toMatch('selma');

    const newDescription = 'Justice';
    todoEditValue.value = newDescription;
    task.editTodo(todoEditValue.id, newDescription);

    expect(todoEditValue.value).toMatch('Justice');
    expect(localStoreMock.data[0].description).toMatch(newDescription);
  });


});