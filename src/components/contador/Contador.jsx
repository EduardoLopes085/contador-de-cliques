import { useState } from "react";
import styles from "./Contador.module.css";

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.center}>
      <div className={styles.counter}>
        <h2>Contador</h2>
        <p>{count}</p>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={() => setCount(p => (p > 0 ? p - 1 : 0))}>-</button>
          <button className={styles.btn} onClick={() => setCount(p => p + 1)}>+</button>
          <button className={styles.btn} onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Contador;