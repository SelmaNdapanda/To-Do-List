import localStoreMock from '../__mock__/remove.js';
import Tasks from '../src/addTodo.js';

const task = new Tasks();

const liHtml = (obj) => {
  const html = `<li class="task" draggable="true">
   <input id="${obj.id}" type="checkbox" class="task-check" ${obj.isCompleted}/>
   <input id="${obj.id}" class="task-text" value="${obj.description}"/>
   <button id="${obj.id}" class="far fa-trash-alt deleteBtn"></button>
   </li>`;
  return html;
};

describe('add and remove', () => {
  // Imitate local storage
  test('Add todo Item', () => {
    const mockStoreBody = `
    <ul class="todo-body"></ul>
    `;

    document.body.insertAdjacentHTML('afterbegin', mockStoreBody);
    const todoBody = document.querySelector('.todo-body');
    let newList = {
      description: 'selma',
      isCompleted: false,
      index: 1,
      id: 1,
    };

    task.addTodo(newList);
    todoBody.insertAdjacentHTML('afterbegin', liHtml(newList));
    let countTodo = todoBody.children.length;
    expect(localStoreMock.data[0]).toEqual(newList);
    expect(countTodo).toBe(1);

    newList = {
      description: 'Justice',
      isCompleted: true,
      index: 2,
      id: 2,
    };
    task.addTodo(newList);
    todoBody.insertAdjacentHTML('afterbegin', liHtml(newList));
    countTodo = todoBody.children.length;
    expect(localStoreMock.data[1]).toEqual(newList);
    expect(countTodo).toBe(2);
  });

  test('Delete todo Item', () => {
    const DeleteBtn = document.querySelectorAll('.deleteBtn');
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const elem = btn.parentNode;
        elem.remove();
        task.removeTodo(e.target.parentNode.id);
      });
    });
    document.querySelector('button[id="2"]').click();
    task.removeTodo(2);
  });
});