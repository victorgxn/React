import React from "react";
import { useFetch } from "../hooks/";
import useCounter from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {/*Ternario si is loading esta en true muestra cargando si no al pokemon */}
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          name={data?.name}
          id={data?.id}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        {" "}
        {/*Ternario para si el counter es mayor a uno que llame a la funcion si no que llame a null */}
        Anterior
      </button>
      {/*Hay que llamarlo asi porque de por si emite un evento y bla bla */}
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
