// randomInt function
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

// global variables
let output;
let nameContainerEl = document.getElementById("name-container");
let nameList = [
  "The leader",
  "The Captain",
  "Stylish",
  "Loose Cannon",
  "Crusher",
  "The Inventor",
  "Grand Master",
  "Overlord",
];
var counter = 0;

// Event listeners
document.getElementById("random").addEventListener("click", randomName);
document.getElementById("showAll").addEventListener("click", showAllNames);

// Button functions

function randomName() {
  let firstNameEl = document.getElementById("first").value;
  let lastNameEl = document.getElementById("last").value;
  output =
    firstNameEl +
    " " +
    `"` +
    nameList[randomInt(0, nameList.length)] +
    " " +
    `"` +
    lastNameEl;
  nameContainerEl.innerHTML = output;
}

function showAllNames() {
  let firstNameEl = document.getElementById("first").value;
  let lastNameEl = document.getElementById("last").value;

  if (counter == 0) {
    for (i = 0; i < nameList.length; i++) {
      output = firstNameEl + " " + `"` + nameList[i] + " " + `"` + lastNameEl;
      nameContainerEl.innerHTML += `<h3 class="center">${firstNameEl} "${nameList[i]}" ${lastNameEl}</h3>`;
    }
    counter++;
  } else if (counter != 0) {
    nameContainerEl.innerHTML = `<h3 id="name-container"></h3>`;
    counter = 0;
    console.log(counter);
  }
}
