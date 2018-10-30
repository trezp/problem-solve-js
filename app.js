const catUL = document.querySelector('ul');
const filters = document.getElementById('filters'); 

let inputField = document.querySelector('input'); 
const searchButton = document.getElementById('search')

// create a function to display cats 
function printArray(arr){
  catUL.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    catUL.innerHTML += `
      <li>
        <img src="http://placekitten.com/400/400" alt="Placeholder image of kitten">
        <h2>${arr[i].name}</h2>
        <p>Age: ${arr[i].age}</p>
        <p>Breed: ${arr[i].breed}</p>
        <p> Color: ${arr[i].color}</p>
      </li>
    `
  }
}

printArray(cats);

// create a function to filter cats 
function filterCatBy(prop, value){
    const filteredCats = [];
    for (let i = 0; i < cats.length; i++) {
      if(cats[i][prop].toLowerCase().trim() === value.toLowerCase().trim()){
        filteredCats.push(cats[i]); 
      } 
    }
    return filteredCats
  }

 filters.addEventListener("click", (event) =>{
  let colorOfCat = event.target.dataset.color;
  let correctCatArray = filterCatBy("color", colorOfCat);

  if (colorOfCat == "") {
    printArray(cats);
  } else {
    printArray(correctCatArray);
  }

 });

search.addEventListener("click", (event)=> {
  event.preventDefault();
  const newArray = filterCatBy("name", inputField.value);
  printArray(newArray);

});

