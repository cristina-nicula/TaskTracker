import { Item } from "./classes.js";

const form = document.getElementById("form");
const toggleBtn = document.getElementById("menu-toggle");
const modal_container = document.getElementById("modal-container");
const open_modal = document.getElementById("open");
const close_modal = document.getElementById("close");

const toggleModalHandler = () => {
  modal_container.classList.toggle("hidden");
};

function toggleSideMenu() {
  const sideMenu = document.getElementById("sidebar-wrapper");
  sideMenu.classList.toggle("invisible");
}

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
toggleBtn.addEventListener("click", toggleSideMenu);

open_modal.addEventListener("click", toggleModalHandler);
close_modal.addEventListener("click", toggleModalHandler);
