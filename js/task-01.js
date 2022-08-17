const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  console.log("Category: ", category.querySelector(".item > h2").textContent);
  console.log("Elements:", category.querySelectorAll("ul > li").length);
});