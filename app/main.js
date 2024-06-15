const $divCards = document.querySelector(".grid");
const url = "https://hp-api.onrender.com/api/characters";

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  });
