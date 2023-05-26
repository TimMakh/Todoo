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

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => renderList(data));

const form = document.querySelector(".todo__form");

console.log(form);

form.submit(function (e) {
  e.preventDefault();
});
