const title = document.querySelector(".todo__input");

const renderTodo = (data) => {
  const list = document.querySelector(".todo__list");
  const template = document
    .querySelector(".todo__template")
    .content.querySelector(".todo__item");
  const newItem = template.cloneNode(true);
  newItem.querySelector(".todo__task").textContent = title.value;
  list.appendChild(newItem);
};

const sendData = async (url, data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => renderTodo(json));
};

const sendTodo = () => {
  const form = document.querySelector(".todo__form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const Todo = JSON.stringify(title.value);

    sendData("https://jsonplaceholder.typicode.com/todos", Todo);
  });
};

const renderList = (data) => {
  const list = document.querySelector(".todo__list");
  data.forEach((item) => {
    const template = document
      .querySelector(".todo__template")
      .content.querySelector(".todo__item");
    const newItem = template.cloneNode(true);
    newItem.querySelector(".todo__task").textContent = item.title;
    list.appendChild(newItem);
  });
};

fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
  .then((res) => res.json())
  .then((data) => renderList(data));

sendTodo();
