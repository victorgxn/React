import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, //Sirve para mantener todos los valores, y debajo solo cambiamos los que nos interesan
      [name]: value, //Asi se hace en react no tiene mucho sentido pero amai que guapo
      //Tambien podemos crear propiedades desde aqui
    });
  };
  return {
    ...formState, //Esto es lo mismo que devolver nombre email y password
    formState,
    onInputChange
  };
}


