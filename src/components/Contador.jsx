import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(prev => prev + 1);
  }

  function decrementar() {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }

  function resetar() {
    setCount(0);
  }

  return (
    <div>
      <h2>Contador</h2>

      <p>{count}</p>

      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        <button onClick={resetar}>Reset</button>
      </div>
    </div>
  );
};

export default Contador;