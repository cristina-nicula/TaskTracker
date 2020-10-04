const form = document.getElementById("form");
const toggleBtn = document.getElementById("menu-toggle");
const element = [];

function toggleSideMenu() {
  const sideMenu = document.getElementById("sidebar-wrapper");
  sideMenu.classList.toggle("invisible");
}

const renderItemHandler = (taskName, taskRes, taskDetails) => {
  const newItemElement = document.createElement("li");
  newItemElement.className = "item";
  newItemElement.innerHTML = `
    <div>
    <p> Task name: ${taskName}</p>
    <p> Responsible name: ${taskRes}</p>
    <p> Task details: ${taskDetails}</p>
    </div>
    `;
  const listItem = document.querySelector(".item-list");
  listItem.appendChild(newItemElement);
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
  const newElement = {
    name: taskName,
    responsible: responsible,
    details: taskDetails,
  };

  element.push(newElement);
  console.log(element);
  renderItemHandler(
    newElement.name,
    newElement.responsible,
    newElement.details
  );
};

form.addEventListener("submit", addItemHandler);
toggleBtn.addEventListener("click", toggleSideMenu);
