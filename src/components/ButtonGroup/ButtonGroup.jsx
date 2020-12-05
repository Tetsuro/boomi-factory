import React from "react";
import styles from "./ButtonGroup.module.scss";

function ButtonGroup() {
  return (
    <nav>
      <ul className={styles.ButtonGroupList}>
        <li>
          <button>Customize a Boomi</button>
        </li>
        <li>
          <button>Select a design</button>
        </li>
      </ul>
    </nav>
  );
}

export default ButtonGroup;
