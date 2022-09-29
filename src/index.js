import './style.css';

const task = [];
const taskList = () => {
  let taskListContent = '';
  task.forEach((item) => {
    taskListContent += `<li class="task"><input class="task-check" type="checkbox"><span class="list">${item.description}</span><i class='fa fa-ellipsis-v'></i></li>`;
  });
  document.querySelector('.activity-container').innerHTML = taskListContent;
};
taskList();