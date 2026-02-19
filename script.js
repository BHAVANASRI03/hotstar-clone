const movies = [
  { name: "Movie 1", img: "assets/movie1.jpg" },
  { name: "Movie 2", img: "assets/movie1.jpg" },
  { name: "Movie 3", img: "assets/movie1.jpg" },
];

const movieRow = document.getElementById("movieRow");

movies.forEach((m) => {
  let img = document.createElement("img");
  img.src = m.img;
  img.title = m.name;
  movieRow.appendChild(img);
});

function play() {
  alert("Play movie (demo) ▶️");
}
