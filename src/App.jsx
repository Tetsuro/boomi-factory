import React from "react";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PrintButton from "./components/PrintButton";


import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ButtonGroup />
      <Preview />
      <PrintButton />
      {/* <MobilePrintButton /> */}
      {/* <FooterMenu /> */}
    </div>
  );
}

export default App;
