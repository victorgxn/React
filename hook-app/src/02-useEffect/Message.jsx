import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const coords = ({ x, y }) => {
      //Desectructuramos del evento las propiedad {x,y} que son las que nos interesan
      const coordenadas = { x, y };
      console.log(coordenadas);
    };

    window.addEventListener("mousemove", coords);

    return () => {
      window.removeEventListener("mousemove", coords);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
