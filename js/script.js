// const images = {
//   croc: 2,
//   elephant: 2,
//   giraffe: 2,
//   gorilla: 2,
//   koala: 2,
//   "polar-bear": 2,
//   tiger: 2,
//   whale: 2,
// };

// const selectRandomImage = (images) => {};

// facts about each fruit
fruitFacts = {
  apple: "2,500 varieties of apples are grown in the United States.",
  orange: "Oranges are the largest citrus fruit in the world.",
  lemon: "Lemons are native to Asia",
  pineapple:
    "Only one pineapple is produced by a single plant in a single season",
  kiwi: "The Average Kiwi fruit has 46 calories",
  strawberry: "The average strawberry has 200 seeds.",
  watermelon:
    "Watermelons are 92% water, making them a perfect refresher for those hot summer months.",
  banana:
    "There are more than 1000 varieties of bananas grown in over 150 countries",
};

// play button
const playButton = document.querySelector(".play");

// counter number of tiles clicked
let counter = 0;
// track clicked tiles
let clickedTiles = [];

// list of all the tiles on the screen
const tiles = document.getElementsByClassName("tile");

// Helper functions
function getImageName(imageUrl) {
  return imageUrl.substring(
    imageUrl.lastIndexOf("/") + 1,
    imageUrl.lastIndexOf(".")
  );
}

/**
 * End of Helper functions
 */

// Main Functions
// --------------

/**
 * create tiles randomly
 */
function createGrid() {
  for (const tile of tiles) {
    // the order of the tile will determine where to place
    // the tile on the grid. If two tiles have the same
    // order, the one that comes first in html will be displayed
    // first
    tile.style.order = Math.floor(Math.random() * 16);
  }
}

function hidePlayButton() {
  playButton.style.display = "none";
}

function hideImage() {
  for (const tile of tiles) {
    if (!tile.firstElementChild.classList.contains("hide")) {
      tile.firstElementChild.classList.add("hide");
      tile.style.backgroundColor = "#ffc354";
    }
  }
}

function checkMatch(clickedTiles) {
  const firstImageName = getImageName(clickedTiles[0].firstElementChild.src);
  const secondImageName = getImageName(clickedTiles[1].firstElementChild.src);
  return firstImageName.toLowerCase() === secondImageName.toLowerCase();
}

function displayFact(fruitName) {
  const fact = document.querySelector(".fact");
  fact.textContent = fruitFacts[fruitName];
}

function removeTiles(clickedTiles) {
  console.log(clickedTiles);
  clickedTiles[0].style.visibility = "hidden";
  clickedTiles[1].style.visibility = "hidden";
}

const revealImage = (tiles) => {
  for (const tile of tiles) {
    tile.addEventListener("click", (e) => {
      counter++;
      clickedTiles.push(tile);
      if (counter === 2) {
        counter = 0;
        // check if the images match
        if (checkMatch(clickedTiles)) {
          displayFact(getImageName(clickedTiles[0].firstElementChild.src));
          // removeTiles(clickedTiles);
          setTimeout(removeTiles, 600, clickedTiles);
        }

        // hide image if no match after 0.5s
        else setTimeout(hideImage, 400);

        // reset this array for the next try
        clickedTiles = [];
      }
      e.currentTarget.firstElementChild.classList.remove("hide");
      tile.style.backgroundColor = "#fff";
    });
  }
};
createGrid();
revealImage(tiles);
playButton.addEventListener("click", hidePlayButton);
