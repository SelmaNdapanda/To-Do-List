export const saveLocal = (tasks) => {
  window.localStorage.setItem('localTasks', JSON.stringify(tasks));
};

export const storage = (element, tasks) => {
  tasks.forEach((task) => {
    if (task === element) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveLocal(tasks);
};