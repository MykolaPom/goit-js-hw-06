//Варіант 1//

// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('button[data-action = "decrement"]');
// const incrementBtn = document.querySelector('button[data-action = "increment"]');
// const valueEl = document.querySelector('#value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);


// decrementBtn.addEventListener('click', () => {
//   console.log('Clicked decrement button');

//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });


// incrementBtn.addEventListener('click', () => {
//   console.log('Clicked increment button');

//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });


//Варіант 2//
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const handleClickDecrementBtn = () => {
  counterValue -= 1;
   valueEl.textContent = counterValue;
}

const handleClickIncrementBtn = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', handleClickDecrementBtn);
incrementBtn.addEventListener("click", handleClickIncrementBtn);

