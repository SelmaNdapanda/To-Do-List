const task = [
    { description: 'Cook lunch', isCompleted: false, index: 0 },
    { description: 'Do laundry', isCompleted: false, index: 1 },
    { description: 'Cook dinner', isCompleted: false, index: 2 },
  ];
  
  const taskList = () => {
    let taskListContent = '';
    task.forEach((item) => {
      taskListContent += `<li class="activity"><input class="activity-check" type="checkbox"><span class="list">${item.description}</span><i class='fa fa-ellipsis-v' style="margin-left: auto"></i></li>`;
    });
    document.querySelector('.activity-container').innerHTML = taskListContent;
  };
  taskList();