const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const containerForBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxesArray = [];

    for (let i = 1; i <= inputEl.value; i += 1) {
      const divColor = getRandomHexColor();

      const newContainer = document.createElement("div");
      newContainer.style.width = `${30 + (i - 1) * 10}px`;
      newContainer.style.height = `${30 + (i - 1) * 10}px`;

      newContainer.style.backgroundColor = divColor;

      boxesArray.push(newContainer);
    };

  containerForBoxes.append(...boxesArray);
}

function destroyBoxes() {
  containerForBoxes.innerHTML = "";
  inputEl.value = null;
}

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);