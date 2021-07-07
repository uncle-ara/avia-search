import React from "react";
import Sort from "./components/Sort/Sort";
import Ticket from "./components/Ticket/Ticket";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.base}>
      <div className={styles.sidebar}>
        <div className={styles.container}>
          <Sort />
        </div>
      </div>
      <div className={styles.content}>
        <Ticket />
      </div>
    </div>
  );
};

export default App;
