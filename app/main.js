const $divCards = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
      $divCards.innerHTML += `<h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="imagen de ${personaje.name}">
       <p>Actor: ${personaje.actor}</p>
        <p>Gender: ${personaje.gender}</p>
         <p>House: ${personaje.house}</p>
          <p>Alive: ${personaje.alive}</p>`;
    });
  });
