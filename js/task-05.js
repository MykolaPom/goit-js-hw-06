const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
  spanEl.innerText = event.target.value || "Anonymous";
  // if (spanEl.textContent.length === 0) {
  //   spanEl.textContent = "Anonymous";
  // }
});