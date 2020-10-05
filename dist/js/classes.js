export class Item {
  constructor(name, responsible, details) {
    this.taskName = name;
    this.responsible = responsible;
    this.details = details;
  }

  render(parent) {
    const newItemElement = document.createElement("li");
    newItemElement.className = "item";
    newItemElement.innerHTML = `
    <div>
    <p> ${this.taskName}</p>
    <p>${this.responsible}</p>
    <p>${this.details}</p>
    </div>
    `;
    parent.appendChild(newItemElement);
  }
}


