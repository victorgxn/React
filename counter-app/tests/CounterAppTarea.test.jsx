import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const valueNum = 100;
  const initialValue = 10;
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valueNum} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 en el componente", () => {
    render(<CounterApp value={valueNum} />);
    expect(screen.getByText(valueNum)).toBeTruthy();
  });

  test("should de incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getAllByText("11")).toBeTruthy();
  });

  test("should de decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getAllByText("9")).toBeTruthy();
  });

  test("should de funcionar el boton de reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //fireEvent.click(screen.getByText("Reset"));
    //expect(screen.getAllByText(initialValue)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getAllByText(initialValue)).toBeTruthy();
  });
});
