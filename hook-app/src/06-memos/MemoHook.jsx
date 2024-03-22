import { useMemo, useState } from "react";
import useCounter from "../hooks/useCounter";

const heavyStuff = (iteratioNumber = 100) => {
  for (let i = 0; i < iteratioNumber; i++) {
    console.log("Ahii vamos");
  }
  return `${iteratioNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { increment, counter } = useCounter(4000);
  const [show, setShow] = useState(true);

  //Va a hacer que se acuerde, memorice el valor de retorno.
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter : <small>{memorizedValue}</small>
      </h1>
      <hr />

      <h4>{heavyStuff(counter)}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
