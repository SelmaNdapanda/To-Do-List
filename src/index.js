// import _ from 'lodash';
import './style.css';

const taskList = () => {
  let taskListContent = '';
  task.forEach((item) => {
    taskListContent += `<li class="activity"><input class="activity-check" type="checkbox"><span class="list">${item.description}</span></li>`;
  });
  document.querySelector('.activity-container').innerHTML = taskListContent;
};
taskList();