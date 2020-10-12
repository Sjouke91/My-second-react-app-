// src/components/Pokemon.js
import React from "react";
import "./pokemon.scss";

// export default function Pokemon({
//   name,
//   weight,
//   abilities,
//   awesome,
//   terrifying,
// }) {
//   return (
//     <div>
//       <h2>Pokemon name: {name}</h2>
//       <p>Weight: {weight} kg</p>
//       <p>Awesome: {awesome ? "yes" : "nope, not really"}</p>
//       <p>Terrifying: {terrifying ? "Very" : "nah, lovable"}</p>
//       <p>Abilities ({abilities.length}):</p>
//       <ul>
//         {abilities.map((attacks) => {
//           return <li>{attacks}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default function Pokemon(props) {
//   return (
//     <div className="Breadcrumb">
//       <div className="Breadcrumb-body">
//         <h5 className="Breadcrumb-title">{props.name}</h5>
//         <h6 className="Breadcrumb-subtitle">
//           {props.awesome ? "An awesome Pokemon" : "Not awesome"}
//         </h6>
//         <p>
//           Weight: {props.weight} kg
//           <br />
//           Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
//           <br />
//           {props.abilities.length} abilities
//         </p>
//       </div>
//       <ul className="list-group list-group-flush">
//         {props.abilities.map((ability) => {
//           return <li className="list-group-item">{ability}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

export default function Pokemon(props) {
  return (
    <div className="Pokemon shadow-sm mb-5">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-4 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}
