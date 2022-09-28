export const saveLocal = (tasks) => {
    window.localStorage.setItem('localTasks', JSON.stringify(tasks));
};
  
export const state = (element, tasks) => {
    tasks.forEach((task) => {
      if (task === element) {
        task.isCompleted = !task.isCompleted;
      }
    });
    saveLocal(tasks);
  };