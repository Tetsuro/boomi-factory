import React, {useState} from "react";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PrintButton from "./components/PrintButton";
import Sheet from "./components/Sheet";
import ColorsList from "./components/ColorsList";
import {EyesList} from "./components/EyesList";
import {colors} from "./data/colors.json";

import styles from "./App.module.scss";

function App() {
  const [designSheetIsOpen, setDesignSheetIsOpen] = useState(false);
  const [customizeSheetIsOpen, setCustomizeSheetIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeEyes, setActiveEyes] = useState('original');

  const handleSheetClose = () => {
    setDesignSheetIsOpen(false);
    setCustomizeSheetIsOpen(false);
  };

  const handleSwatchClick = (color) => {
    setActiveColor(color);
  }

  const handleEyesClick = (eyes) => {
    setActiveEyes(eyes);
  }

  // TODO: Sheet should have "open" prop to toggle.
  const customizeSheetMarkup = customizeSheetIsOpen ? (
    <Sheet title="Select colour scheme" onClose={handleSheetClose}>
      <ColorsList onSwatchClick={handleSwatchClick} />
    </Sheet>
  ) : null;

  // TODO: Sheet should have "open" prop to toggle.
  const designSheetMarkup = designSheetIsOpen ? (
    <Sheet title="Select eyes" onClose={handleSheetClose}>
      <EyesList onEyesClick={handleEyesClick} />
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
          label: "Select colour scheme"
        },
        {
          onClick: handleDesignClick,
          label: "Select eyes"
        }
      ]} />
      <Preview activeColor={activeColor} activeEyes={activeEyes} />
      <PrintButton />
      {customizeSheetMarkup}
      {designSheetMarkup}
    </div>
  );
}

export default App;
