const $divCards = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
      $divCards.innerHTML += `<div> <h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="imagen de ${personaje.name}">
       <p>Actor: ${personaje.actor}</p>
        <p>Genero: ${personaje.gender}</p>
         <p>Casa: ${personaje.house}</p>
          <p>Estado: ${personaje.alive}</p> </div>`;
    });
  });
