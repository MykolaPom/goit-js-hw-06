const inputEl = document.querySelector("#validation-input");

const maxInputLength = Number(inputEl.getAttribute("data-length"));
console.log(maxInputLength);


inputEl.addEventListener("blur", event => {
  if (event.currentTarget.value.length === maxInputLength) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});

console.log(inputEl);
