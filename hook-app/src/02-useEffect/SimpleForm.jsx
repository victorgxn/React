import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Victor",
    email: "victor@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, //Sirve para mantener todos los valores, y debajo solo cambiamos los que nos interesan
      [name]: value, //Asi se hace en react no tiene mucho sentido pero amai que guapo
      //Tambien podemos crear propiedades desde aqui
    });
  };

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario SimpleForm</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="victor@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Victor" && <Message />}
    </>
  );
};
