const gallery = document.getElementById("gallery");
const menus = document.querySelector("#menus select");
const inputField = document.querySelector("input");
const search = document.getElementById("search");

/**
 * Filter Cats by Colors
 * EXCEEDS ==> filter by any property
 * @param {string} value -
 */
function filterCatBy(property) {
  const filteredCats = [];
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].color === property) {
      filteredCats.push(cats[i]);
    }
  }
  return filteredCats;
}

/**
 * Search for cats by name
 * EXCEEDS ==> search by any property
 * @param {string} searchTerm
 */
function catSearch(searchTerm) {
  const filteredCats = [];
  for (let i = 0; i < cats.length; i++) {
    if (
      cats[i].name
        .toLowerCase()
        .trim()
        .includes(searchTerm.toLowerCase().trim())
    ) {
      filteredCats.push(cats[i]);
    }
  }
  return filteredCats;
}

/**
 * Takes in an array and displays to page
 * @param {array} arr
 */
function populateGallery(arr) {
  gallery.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    gallery.innerHTML += `
      <li>
        <img src="http://placekitten.com/400/400" alt="Placeholder image of kitten">
        <h2>${arr[i].name}</h2>
        <p>Age: ${arr[i].age}</p>
        <p>Breed: ${arr[i].breed}</p>
        <p>Color: ${arr[i].color}</p>
      </li>
    `;
  }
}

// On select menu change, passes current value of select menu item (white, black, or tuxedo)
// to filterCatBy function
menus.addEventListener("change", event => {
  let colorOfCat = menus.value;
  let correctCatArray = filterCatBy(colorOfCat);

  if (colorOfCat == "all") {
    populateGallery(cats);
  } else {
    populateGallery(correctCatArray);
  }
});

// on keyup, pass search term to catSearch function and populate gallery
search.addEventListener("keyup", event => {
  const newArray = catSearch(inputField.value);
  populateGallery(newArray);
});

populateGallery(cats);
