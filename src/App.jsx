import React from "react";
import FooterMenu from "./components/FooterMenu";
import Header from "./components/Header";
import Preview from "./components/Preview";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Preview />
      <FooterMenu />
    </div>
  );
}

export default App;
