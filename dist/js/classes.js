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
    <div>
    <a id="delete-task" href="#" style="text-decoration: none"><i style="display: flex; justify-content: flex-end" class="fas fa-times"></i></a>
    <p> ${this.taskName}</p>
    <p>${this.responsible}</p>
    <p>${this.details}</p>
    </div>
    `;
    parent.appendChild(newItemElement);
   newItemElement.id = `item-${counter}`;
   counter++;
    newItemElement.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", newItemElement.id )
    })
      const deleteSign = document.getElementById('delete-task');
    deleteSign.addEventListener("click", ()=> {
        newItemElement.parentNode.removeChild(newItemElement);
    })
  }
}


