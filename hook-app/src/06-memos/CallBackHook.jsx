import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    //Callback al propio valor y le suma 1, aqui no se redibuja en memoria el componente, esto no siempe es obligatorio ya que react de por si es muy eficiente  pero si en algun momento creemos que es necesario podemos usar
    setCounter((counterValue) => counterValue + value);
  }, []);

  //Los objetos siempre apuntan a un espacio de memoria diferente
  return (
    <>
      <h1>UseCallBack Hook: {counter}</h1>
      {/**Nombre de la property - Lo que mandamos */}
      <ShowIncrement increment={incrementFather} />
      <hr />
    </>
  );
};
