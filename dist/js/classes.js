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
    <p> Task name: ${this.taskName}</p>
    <p> Responsible name: ${this.responsible}</p>
    <p> Task details: ${this.details}</p>
    </div>
    `;
    parent.appendChild(newItemElement);
  }
}


