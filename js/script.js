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

let counter = 0;

// list of all the tiles on the screen
const tiles = document.getElementsByClassName("tile");

function hideImage() {
  for (const tile of tiles) {
    if (!tile.firstElementChild.classList.contains("hide")) {
      tile.firstElementChild.classList.add("hide");
      tile.style.backgroundColor = "#ffc354";
    }
  }
}

const revealImage = (tiles) => {
  for (const tile of tiles) {
    tile.addEventListener("click", (e) => {
      counter++;
      if (counter === 2) {
        console.log(counter);
        counter = 0;
        setTimeout(hideImage, 500);
      }
      e.currentTarget.firstElementChild.classList.remove("hide");
      tile.style.backgroundColor = "#fff";
    });
  }
};

revealImage(tiles);
