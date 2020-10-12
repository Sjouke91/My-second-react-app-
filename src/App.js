import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/pokemon/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

// function App() {
//   const pokemon = all_pokemon.map((pokemon) => {
//     const object = (
//       <Pokemon
//         name={pokemon.name}
//         weight={pokemon.weight}
//         awesome={pokemon.awesome}
//         terrifying={pokemon.terrifying}
//         abilities={pokemon.abilities}
//       />
//     );
//     return object;
//   });

//   return (
//     <div className="container">
//       <Title content="List of awesome pokemon" />
//       <div className="row">{pokemon}</div>
//     </div>
//   );
// }

// written with the map method inside the App
function App() {
  return (
    <div className="container">
      <Title content="List of awesome pokemon" />
      <div className="row">
        {all_pokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
