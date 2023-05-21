fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => data.json())
  .then((data) => console.log(data));

const renderTodo = (data) => {
  const listTodo = document.querySelector(".todo__list");
  data.forEach((todo) => {
    const template = document
      .querySelector(".todo__item")
      .content.querySelector(".todo__card");
    const todoItem = template.cloneNode(true);
    todoItem.querySelector(".todo__task").textContent = data.title;
    listTodo.appendChild(todoItem);
  });
};
