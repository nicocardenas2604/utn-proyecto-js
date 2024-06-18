const $divCards = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    const personajes = data.slice(0, 30);
    console.log(personajes);

    personajes.forEach((personaje) => {
      let genero = personaje.gender;
      if (genero === "male") {
        genero = "masculino";
      } else if (genero === "female") {
        genero = "femenino";
      } else {
        genero = "desconocido";
      }

      let estado = personaje.alive;
      if (estado) {
        estado = "vivo";
      } else {
        estado = "fallecido";
      }

      $divCards.innerHTML += `<div> <h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="imagen de ${personaje.name}">
       <p>Actor: ${personaje.actor}</p>
        <p>Genero: ${genero}</p>
         <p>Casa: ${personaje.house}</p>
          <p>Estado: ${estado}</p> </div>`;
    });
  });
