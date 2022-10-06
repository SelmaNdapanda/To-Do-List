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

});