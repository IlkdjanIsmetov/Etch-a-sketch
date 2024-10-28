const gridContainer = document.querySelector("#gridContainer");
function color(div) {
  if (div.style.backgroundColor === "") {
    div.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.opacity = 0.1;
  } else {
    div.style.opacity = Math.min(parseFloat(div.style.opacity) + 0.1, 1);
  }
}
function createGrid(scale = 16) {
  for (let i = 0; i < scale * scale; i++) {
    let div = document.createElement("div");
    div.style.width = 960 / scale + "px";
    div.style.height = 960 / scale + "px";
    div.addEventListener("mouseover", () => color(div));
    gridContainer.appendChild(div);
  }
}
function setGrid() {
  const scale = Number(prompt("Enter grid scale: "));
  gridContainer.innerHTML = "";
  createGrid(scale);
}
createGrid();
