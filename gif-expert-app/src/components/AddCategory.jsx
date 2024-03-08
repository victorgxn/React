import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  //Desectructuramos el target del objeto event que nos viene por parametros
  const onInputChange = ({ target }) => {
    //console.log(event.target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
