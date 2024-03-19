import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  console.log(sprites);
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
