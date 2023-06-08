const title = document.querySelector(".todo__input");

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
    .then((json) => renderItem(json));
};

const sendTodo = () => {
  const form = document.querySelector(".todo__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const Todo = JSON.stringify(title.value);
    sendData("https://jsonplaceholder.typicode.com/todos", Todo);
  });
};

const renderItem = (item) => {
  const list = document.querySelector(".todo__list");
  const template = document
    .querySelector(".todo__template")
    .content.querySelector(".todo__item");
  const newItem = template.cloneNode(true);
  newItem.querySelector(".todo__task").textContent = item.title;
  newItem.querySelector(".todo__checkbox").addEventListener("change", (evt) => {
    if (evt.target.checked) {
      newItem.querySelector(".todo__task").style.textDecoration =
        "line-through";
    } else {
      newItem.querySelector(".todo__task").style.textDecoration = "none";
    }
  });
  newItem
    .querySelector(".todo__btn-priority--high")
    .addEventListener("click", (evt) => {
      newItem.querySelector(".todo__task").style.color = "red";
    });
  newItem
    .querySelector(".todo__btn-priority--normal")
    .addEventListener("click", (evt) => {
      newItem.querySelector(".todo__task").style.color = "green";
    });
  newItem
    .querySelector(".todo__btn-priority--low")
    .addEventListener("click", (evt) => {
      newItem.querySelector(".todo__task").style.color = "yellow";
    });
  newItem.dataset.id = item.id;
  newItem
    .querySelector(".todo__btn-priority--remove")
    .addEventListener("click", function (evt) {
      const itemID = evt.target.closest(".todo__item").dataset.id;
      this.dataset.id = itemID;
      const removeTodo = evt.target.closest(".todo__item").remove();
    });
  newItem.querySelector(".todo__checkbox");
  list.appendChild(newItem);
};

const renderList = (data) => {
  data.forEach((item) => renderItem(item));
};

fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
  .then((res) => res.json())
  .then((data) => renderList(data));

sendTodo();
