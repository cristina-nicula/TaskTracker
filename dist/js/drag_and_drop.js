// const draggableElement = document.querySelector(".item");
//
// draggableElement.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", draggableElement.id);
// });
//
for (const dropZone of document.querySelectorAll(".box")) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("box--over");
  });
  dropZone.addEventListener("dragleave", (e) => {
    dropZone.classList.remove("box--over");
  });
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const dropedElementId = e.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(dropedElementId);
    dropZone.querySelector("ul").appendChild(droppedElement);
    dropZone.classList.remove("box--over");
  });
}
