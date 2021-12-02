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

const tiles = document.getElementsByClassName("tile");

const revealImage = (tiles) => {
  for (const tile of tiles) {
    tile.addEventListener("click", (e) => {
      e.currentTarget.firstElementChild.style.display = "inherit";
      tile.style.backgroundColor = "#fff";
    });
  }
};

revealImage(tiles);
