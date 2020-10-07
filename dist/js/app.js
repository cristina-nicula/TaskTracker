import { Item } from "./classes.js";

const form = document.getElementById("form");

const modal_container = document.getElementById("modal-container");
const open_modal = document.getElementById("open");
const close_modal = document.getElementById("close");

const toggleModalHandler = () => {
  modal_container.classList.toggle("hidden");
};

const addItemHandler = (event) => {
  event.preventDefault();
  const taskName = event.target.name.value;
  const responsible = event.target.responsible.value;
  const taskDetails = event.target["task-details"].value;
  if (
    taskName.trim() === "" ||
    responsible === "Please select the developer" ||
    taskDetails.trim() === ""
  ) {
    alert("Please enter required values to create your task.");
    return;
  }
  const itemList = document.querySelector("ul.item-list");
  const item = new Item(taskName, responsible, taskDetails);
  item.render(itemList);
  form.reset();
  toggleModalHandler();
};

form.addEventListener("submit", addItemHandler);

open_modal.addEventListener("click", toggleModalHandler);
close_modal.addEventListener("click", toggleModalHandler);

modal_container.addEventListener("click", toggleModalHandler);
modal_container.children[0].addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  false
);

const itemList = document.querySelector("ul.item-list");
const item = new Item("My example task", "Cristina", "This is my task");
const largeitem = new Item(
  "My example task",
  "Cristina",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores delectus fugiat libero rem tenetur ut. Dolorem nam reiciendis sed."
);
item.render(itemList);
item.render(itemList);
item.render(itemList);
item.render(itemList);
item.render(itemList);
item.render(itemList);
item.render(itemList);
largeitem.render(itemList);
