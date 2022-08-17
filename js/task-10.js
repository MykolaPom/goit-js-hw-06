const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const containerForBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const boxesArray = [];

  for (let i = 1; i <= inputEl.value; i += 1) {
    const boxColor = getRandomHexColor();
    const boxDimensions = '30px';
    
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + (i - 1) * 10}px`;
    newBox.style.height = `${30 + (i - 1) * 10}px`;
    newBox.style.backgroundColor = boxColor;

    boxesArray.push(newBox);

    console.log(boxesArray);
  }

  containerForBoxes.append(...boxesArray);
}

function destroyBoxes() {
  containerForBoxes.innerHTML = "";
  inputEl.value = null;
}

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
