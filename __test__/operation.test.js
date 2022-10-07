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

  // complete status
  test('Todo list should be marked as completed TRUE', () => {
    const todoCheckBox = document.querySelector('.task-check');

    expect(todoCheckBox.checked).toBeFalsy();
    todoCheckBox.checked = true;
    task.isCompletedStatus(todoCheckBox.id, todoCheckBox.checked);

    expect(localStoreMock.data[0].isCompleted).toBeTruthy();
    expect(todoCheckBox.checked).toBeTruthy();
  });

  // clear all checked taks
  test('Clear all checked todo task', () => {
    const clearAll = document.querySelector('.clear-btn');
    clearAll.addEventListener('click', task.clearAllCompletedTask());
    clearAll.click();
    expect(localStoreMock.data.length).toBe(0);
  });

});