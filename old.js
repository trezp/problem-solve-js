

const catUL = document.querySelector('ul');

//first display cats 
// for (let i = 0; i < cats.length; i++) {
//   // first just set equal in innerHTML. Uh oh, why are we seeing only the last cat? 
//   // Because catUL.innerHTML is being reassigned every time
//   catUL.innerHTML += `
//     <li>
//       <img src="http://placekitten.com/400/400" alt="Placeholder image of kitten">
//       <h2>${cats[i].name}</h2>
//       <p>Age: ${cats[i].age}</p>
//       <p>Breed: ${cats[i].breed}</p>
//     </li>
//   `
// }

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
// filter by breed 
// what do we need the user to do? 
  // tell us which breed they want to see 
    // How can they do that? 
      // selecting it from a menu 
      // filling out a form
      // pressing a button 
// what do we need to do behind the scenes? 
  // get which breed the user has chosen 
  // compare it to the list 
  // make a new list with only those chosen 
  // display that list on the page 

// gets the correct cats 
  // function filterCatBy(){
  //   for (let i = 0; i < cats.length; i++) {
  //     if(cats[i].age === 3){
  //       console.log(cats[i]);
  //     }
  //   }
  // }

  // but we need it to do more. we need it to return a list of cats.
  // let's also make filter by more versatile 
  // 1. 
  function filterCatBy(prop, value){
    const filteredCats = [];
    for (let i = 0; i < cats.length; i++) {
      if(cats[i][prop] === value){
        filteredCats.push(cats[i]); 
      } 
    }
    return filteredCats
  }

  // now we have a way to filter the cats and a way to print cats to the page
  // how can we combine them? 
    // make the buttons in the HTML
 const filters = document.getElementById('filters'); 

 filters.addEventListener("click", (event) =>{
  let colorOfCat = event.target.dataset.color;
  let correctCatArray = filterCatBy("color", colorOfCat);
  printArray(correctCatArray);
 });

 // go back to showing all cats 
 filters.addEventListener("click", (event) =>{
  let colorOfCat = event.target.dataset.color;

  if (colorOfCat == ""){
    printArray(cats);
  } else {
    let correctCatArray = filterCatBy("color", colorOfCat);
    printArray(correctCatArray);
  }
 });

// Searching cats 
// Let's think about what a search does. When we search, we: 
 // Type that information into a search bar 
 // The computer takes that information and does something with it 
 // And gives us back what we searched for (hopefully)

// Now that we're programming, let's try to fill in the blanks 
 // The user types the information they're searching for into the search bar 
 // We take what the user has typed and compare that information to the data we have 
 // We return to the user only the information that matches that data 
 // What do we need to get the information that the user is searching for? 
  // a form --> make an input field 
  // how do we get that information? 
  // first select the input in JS 
  const inputField = document.querySelector('input'); 
  const searchButton = document.getElementById('search')
  
  search.addEventListener("click", (event)=> {
    event.preventDefault();
    const newArray = filterCatBy("name", inputField.value);
    printArray(newArray);
    // What if the user doesn't use caps? 
    // What about spaces and stuff? <-- GOOGLE THESE FOR ANSWERS
  });
  
