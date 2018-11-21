const gallery = document.getElementById('gallery');
const menus = document.querySelector('#menus select'); 

let inputField = document.querySelector('input'); 
const search = document.getElementById('search')

// filter cats by color
function filterCatBy(value){
  const filteredCats = [];
    for (let i = 0; i < cats.length; i++) {
      if(cats[i].color === value){
        filteredCats.push(cats[i]); 
      } 
    }
  return filteredCats
}

// Search cats 
// EXCEEDS ==> search by any property
function catSearch(searchTerm){
  const filteredCats = [];
  for (let i = 0; i < cats.length; i++) {
    if(cats[i].name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())){
      filteredCats.push(cats[i]); 
    } 
  }
  return filteredCats
}

// Display cats
function populateGallery(arr){
  gallery.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    gallery.innerHTML += `
      <li>
        <img src="http://placekitten.com/400/400" alt="Placeholder image of kitten">
        <h2>${arr[i].name}</h2>
        <p>Age: ${arr[i].age}</p>
        <p>Breed: ${arr[i].breed}</p>
        <p>Color: ${arr[i].color}</p>
      </li>
    `
  }
}

menus.addEventListener("change", (event) =>{
   let colorOfCat = menus.value;
  let correctCatArray = filterCatBy(colorOfCat);

  if (colorOfCat == "all") {
    populateGallery(cats);
  } else {
    populateGallery(correctCatArray);
  }

 });

search.addEventListener("keyup", (event)=> {
  const newArray = catSearch(inputField.value);
  populateGallery(newArray);
});

populateGallery(cats);