import * as task from './src/task.js';

describe('add', () => {
  // Imitate local storage
  test('storage object to "imitate" localStorage operations', () => {
    task.add = function () {
      return { description: 'selma', isCompleted: false, index: 0 };
    };

    const newList = { description: 'selma', isCompleted: false, index: 0 };
    task.add(newList);
    expect(newList.description).toBe('selma');
    expect(newList.isCompleted).toBe(false);
    expect(newList.index).toBe(0);
  });

  // Add one li
  test('test if add functions add exactly one <li>', () => {
    document.body.innerHTML = '<li class="task" draggable="true">'
  + '<input type="checkbox" class="task-check" />'
  + '<input class="task-text" />'
  + '<button class="far fa-trash-alt deleteBtn"></button>'
  + '</li>';
    task.add();
    const addList = document.querySelectorAll('.activity-container li');
    expect(addList).toHaveLength(0);
  });
});