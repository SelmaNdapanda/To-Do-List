import { saveLocal } from './storage.js';

export const add = (tasks) => {
  console.log(document.querySelector('#description').value);
  tasks.push({
    description: document.querySelector('#description').value, isCompleted: false, index: tasks.length + 1,
  });
  saveLocal(tasks);
};

export const updateIndex = (tasks) => {
  let i = 1;
  tasks.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
};

export const removeEverything = (tasks) => {
  tasks = tasks.filter((elem) => elem.isCompleted === false);
  updateIndex(tasks);
  saveLocal(tasks);
};