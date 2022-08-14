const changeTextColor = document.querySelector('.color');
// console.log(changeTextColor);

const changeColorBtn = document.querySelector(".change-color");
// console.log(changeColorBtn);

const baseBackgroundColor = document.querySelector('body');
// console.log(baseBackgroundColor);

changeColorBtn.addEventListener("click", () => {
  const colorBodyEl = getRandomHexColor();
  baseBackgroundColor.style.backgroundColor = colorBodyEl;
  changeTextColor.style.color = colorBodyEl;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
