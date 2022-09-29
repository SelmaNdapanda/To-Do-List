import { saveLocal } from './storage.js';

export const add = (tasks) => {
  tasks.push({
    description: document.querySelector('#description').value, isCompleted: false, index: tasks.length + 1,
  });
  document.querySelector('#description').value = '';
  saveLocal(tasks);
};

export const updateIndex = (tasks) => {
  let i = 1;
  tasks.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
};

export const removeDone = (tasks) => {
  tasks = tasks.filter((elem) => elem.isCompleted === false);
  updateIndex(tasks);
  saveLocal(tasks);
};