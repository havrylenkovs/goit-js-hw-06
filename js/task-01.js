const allCategoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allCategoriesList.length}`);

console.dir([...allCategoriesList]);
const categoriesList = document.querySelector("#categories");
console.dir(categoriesList);
[...categoriesList.children].forEach((elem)=>{
  // console.dir(elem.children[0].textContent)
  console.dir(`Category: ${elem.firstElementChild.textContent}`)
  console.dir(`Elements: ${elem.firstElementChild.children.length}`)
})

