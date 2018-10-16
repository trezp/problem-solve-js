// We're going to use cats, but this could literally be anything
  // think about all the stuff on the internet you encounter as a list
    // shopping on Amazon 
    // your email inbox 
    // your Instagram feed
    // your Twitter feed
    // Yelp reviews
      // the list goes on and on! 
// a way to search for cats 
  // what do we need the user to do? 
    // tell us which cat they're searching for 
      // with a form 
        // a form field
        // a button to send the form  
  // what do we need to do behind the scenes? 
    // know what the user is searching for 
      // get the information from the form 
    // know what the user is searching 
      // a list of cats 
        // get the list of cats from the HTML 
          // what the user is searching will come from many sources, but the main idea
          // is that we need to have access to the information being searched
    // now we have cats to search and we know which cat or cats the user is searching for
        // compare the two pieces of information. 
        // if the informatiom matches, show the user the correct cat!

// a way to categorize cats by breed 
// a way to view of a larger photo of a cat 

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

 filters.addEventListener("click", (event)=>{
  let colorOfCat = event.target.dataset.color;
  let correctCatArray = filterCatBy("color", colorOfCat);
  console.log(correctCatArray)
  printArray(correctCatArray);
 })