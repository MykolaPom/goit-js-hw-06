
const categories = document.querySelectorAll('.item');
// console.log('Number of categories:', categories.length); // варіант 1

let totalCategories = 0;

for (let i = 0; i < categories.length; i += 1) {
  totalCategories += i;
};

console.log('Number of categories:', totalCategories); //варіант 2

//---------------//

categories.forEach((category) => {
  console.log('Category: ', category.querySelector('.item > h2').textContent);
  console.log('Elements:', category.querySelectorAll('ul > li').length);
});

