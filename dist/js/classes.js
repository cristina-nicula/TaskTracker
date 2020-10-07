let counter = 0;
export class Item {
  constructor(name, responsible, details) {
    this.taskName = name;
    this.responsible = responsible;
    this.details = details;
  }

  render(parent) {
    const newItemElement = document.createElement("li");
    newItemElement.className = "item";
    newItemElement.setAttribute("draggable", "true");
    newItemElement.innerHTML = `
    <div class="text-align-left">
    <div class="align-elem-right"><p class="delete-task">&times;</p></div>
    <p class="p-top-bottom" contenteditable="true"> ${this.taskName}</p>
     <select id="responsible" name="responsible" class="editable-select" required>
              <option disabled selected>${this.responsible}</option>
              <option value="Developer 1">Developer 1</option>
              <option value="Developer 2">Developer 2</option>
              <option value="Developer 3">Developer 3</option>
    </select>
    <p class="p-top-bottom text-align-left" contenteditable="true">${this.details}</p>
    </div>
    `;
    parent.appendChild(newItemElement);
    newItemElement.id = `item-${counter}`;
    counter++;
    newItemElement.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", newItemElement.id);
    });
    const deleteSign = newItemElement.querySelector(".delete-task");
    deleteSign.addEventListener("click", () => {
      newItemElement.parentNode.removeChild(newItemElement);
    });
  }
}
