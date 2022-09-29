import './style.css';
import * as task from './task.js';
import * as store from './storage.js';

let tasks = [];
const listEl = document.querySelector('ul');

const taskList = () => {
  if (window.localStorage.getItem('localTasks')) {
    const localTasks = window.localStorage.getItem('localTasks');
    tasks = JSON.parse(localTasks);
  }
  document.querySelector('.activity-container').innerHTML = '';
  tasks.forEach((item) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    if (item.isCompleted) { taskElement.classList.add('completed'); }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    checkbox.addEventListener('click', () => {
      store.storage(item, tasks);
      taskList();
    });
    checkbox.checked = item.isCompleted;
    taskElement.appendChild(checkbox);
    const taskText = document.createElement('input');
    taskText.classList = 'task-text';
    taskText.value = item.description;
    taskText.addEventListener('change', () => {
      if (taskText.value.length > 0) {
        item.description = taskText.value;
        store.saveLocal(tasks);
      }
    });
    taskElement.appendChild(taskText);
    const dragIcon = document.createElement('button');
    dragIcon.classList = 'far fa-trash-alt deleteBtn';
    taskElement.appendChild(dragIcon);
    taskElement.draggable = 'true';
    document.querySelector('.activity-container').appendChild(taskElement);
  });
};

const removeItem = (e) => {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }
  const btn = e.target;
  tasks.forEach((task) => {
    if (task.description === btn.parentElement.children[1].value) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  btn.closest('li').remove();
  task.updateIndex(tasks);
  store.saveLocal(tasks);
};

listEl.addEventListener('click', removeItem);
taskList();
document.querySelector('#task-name').addEventListener('submit', (event) => {
  event.preventDefault();
  task.add(tasks);
  taskList();
});
document.querySelector('.clear-container').addEventListener('click', () => {
  task.removeEverything(tasks);
  taskList();
});