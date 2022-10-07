import { saveLocal } from './storage.js';

// Add
export const add = (tasks) => {
  // console.log(document.querySelector('#description').value);
  const holder = {
    description: document.querySelector('#description').value, isCompleted: false, index: tasks.length + 1,
  };
  tasks.push(holder);
  saveLocal(tasks);
};

export const updateIndex = (tasks) => {
  let i = 1;
  tasks.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
};

// Delete
export const removeEverything = (tasks) => {
  tasks = tasks.filter((elem) => elem.isCompleted === false);
  updateIndex(tasks);
  saveLocal(tasks);
};
