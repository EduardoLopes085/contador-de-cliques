import { useState } from "react";
import styles from "./components/contador/contador.module.css";

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
        <button className={styles.counter} onClick={decrementar}>-</button>
        <button className={styles.counter} onClick={incrementar}>+</button>
        <button className={styles.counter} onClick={resetar}>Reset</button>
      </div>
    </div>
  );
};

export default Contador;