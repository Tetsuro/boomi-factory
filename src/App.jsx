import React, {useState} from "react";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PrintButton from "./components/PrintButton";
import Sheet from "./components/Sheet";


import styles from "./App.module.scss";

function App() {
  const [designSheetIsOpen, setDesignSheetIsOpen] = useState(false);
  const [customizeSheetIsOpen, setCustomizeSheetIsOpen] = useState(false);


  const handleSheetClose = () => {
    setDesignSheetIsOpen(false);
    setCustomizeSheetIsOpen(false);
  };

  const customizeSheetMarkup = customizeSheetIsOpen ? (
    <Sheet title="Customize a Boomi" onClose={handleSheetClose}>
      Customize
    </Sheet>
  ) : null;

  const designSheetMarkup = designSheetIsOpen ? (
    <Sheet title="Select a design" onClose={handleSheetClose}>
      Design
    </Sheet>
  ) : null;

  const handleCustomizeClick = () => {
    setCustomizeSheetIsOpen(true);
  };

  const handleDesignClick = () => {
    setDesignSheetIsOpen(true);
  };  

  return (
    <div className={styles.App}>
      <Header />
      <ButtonGroup buttons={[
        {
          onClick: handleCustomizeClick,
          label: "Customize a Boomi"
        },
        {
          onClick: handleDesignClick,
          label: "Select a design"
        }
      ]} />
      <Preview />
      <PrintButton />
      {customizeSheetMarkup}
      {designSheetMarkup}
    </div>
  );
}


export default App;
