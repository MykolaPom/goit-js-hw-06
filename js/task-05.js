const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

function onInputChange() {
  spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', onInputChange);