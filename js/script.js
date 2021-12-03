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

// counter number of tiles clicked
let counter = 0;
// track clicked tiles
let clickedTiles = [];

// list of all the tiles on the screen
const tiles = document.getElementsByClassName("tile");

// Helper functions
function getImageName(imageUrl) {
  return imageUrl.substring(
    imageUrl.lastIndexOf("/"),
    imageUrl.lastIndexOf(".")
  );
}

/**
 * End of Helper functions
 */

/**
 * Main Functions
 */
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

function removeTiles() {}

const revealImage = (tiles) => {
  for (const tile of tiles) {
    tile.addEventListener("click", (e) => {
      counter++;
      clickedTiles.push(tile);
      if (counter === 2) {
        counter = 0;
        // check if the images match
        if (checkMatch(clickedTiles)) console.log("match");
        // hide image if no match after 0.5s
        else setTimeout(hideImage, 500);

        // reset this array for the next try
        clickedTiles = [];
      }
      e.currentTarget.firstElementChild.classList.remove("hide");
      tile.style.backgroundColor = "#fff";
    });
  }
};

revealImage(tiles);
