const movies = [
  {
    name: "Avengers Endgame",
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
  },
  {
    name: "Avatar",
    img: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  {
    name: "Jungle Cruise",
    img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_SY679_.jpg"
  },
  {
    name: "Frozen",
    img: "https://m.media-amazon.com/images/I/51gF4h5RrJL._AC_.jpg"
  },
  {
    name: "Thor Ragnarok",
    img: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg"
  },
  {
    name: "Lion King",
    img: "https://m.media-amazon.com/images/I/81lI5p+qJwL._AC_SY679_.jpg"
  },
  {
    name: "Black Panther",
    img: "https://m.media-amazon.com/images/I/81vZ6sM2S-L._AC_SY679_.jpg"
  },
  {
    name: "Doctor Strange",
    img: "https://m.media-amazon.com/images/I/71fZ+v9R+EL._AC_SY679_.jpg"
  },
  {
    name: "Aladdin",
    img: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_SY679_.jpg"
  },
  {
    name: "Captain Marvel",
    img: "https://m.media-amazon.com/images/I/81nC6GgXuJL._AC_SY679_.jpg"
  }
];

const movieRow = document.getElementById("movieRow");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const img = document.createElement("img");
    img.src = movie.img;
    img.alt = movie.name;

    card.appendChild(img);
    movieRow.appendChild(card);
});
