document.querySelectorAll(".available_items p").forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("elementName", e.target.innerText);

    // Create grid squares and show them
    createGridSquares();
    document.querySelectorAll(".square").forEach((square) => square.classList.add("visible"));
  });
  item.addEventListener("dragend", () => {
    document.querySelectorAll(".square").forEach((square) => square.classList.remove("visible"));
  });
});

function createGridSquares() {
  let editor = document.getElementById("editor");

  for (let i = 0; i < 9; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    editor.appendChild(square);

    // drag/drop at squares logic
    square.addEventListener("dragover", (e) => {
      e.preventDefault();
      square.classList.add("hovered");
    });
    square.addEventListener("dragleave", () => square.classList.remove("hovered"));
    square.addEventListener("drop", (e) => {
      e.preventDefault();
      let droppedText = e.dataTransfer.getData("elementName");
      let element = createElement(droppedText, i, editor);
      if (element) {
        editor.appendChild(element);
        moveToAnchorPosition(element, editor);
      }
    });
  }
}
