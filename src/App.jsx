import React, {useState} from "react";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PrintButton from "./components/PrintButton";
import Sheet from "./components/Sheet";
import ColorsList from "./components/ColorsList";
import MobileMenu from "./components/MobileMenu";
import Overlay from "./components/Overlay";
import {EyesList} from "./components/EyesList";
import {colors} from "./data/colors.json";

import {useKeyPress} from "./hooks/useKeyPress";

import styles from "./App.module.scss";

function App() {
  const [designSheetIsOpen, setDesignSheetIsOpen] = useState(false);
  const [customizeSheetIsOpen, setCustomizeSheetIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
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

  const customizeSheetMarkup = (
    <Sheet title="Select colours" onClose={handleSheetClose} isOpen={customizeSheetIsOpen}>
      <ColorsList onSwatchClick={handleSwatchClick} />
    </Sheet>
  );

  const designSheetMarkup = (
    <Sheet title="Select eyes" onClose={handleSheetClose} isOpen={designSheetIsOpen}>
      <EyesList onEyesClick={handleEyesClick} />
    </Sheet>
  );

  const handleCustomizeClick = () => {
    setCustomizeSheetIsOpen(true);
  };

  const handleDesignClick = () => {
    setDesignSheetIsOpen(true);
  };  

  const closeOverlays = () => {
    setCustomizeSheetIsOpen(false);
    setDesignSheetIsOpen(false);
    setMobileMenuIsOpen(false);
  };

  const handleMobileMenuActivatorClick = () => {
    mobileMenuIsOpen ? setMobileMenuIsOpen(false) : setMobileMenuIsOpen(true);
  }

  const overlayIsOpen = mobileMenuIsOpen;

  useKeyPress(27, closeOverlays);
  
  return (
    <div className={styles.App}>
      <Header onMobileMenuActivatorClick={handleMobileMenuActivatorClick} />
      <Preview activeColor={activeColor} activeEyes={activeEyes} />
      <ButtonGroup buttons={[
        {
          onClick: handleCustomizeClick,
          label: "Select colours"
        },
        {
          onClick: handleDesignClick,
          label: "Select eyes"
        }
      ]} />
      <MobileMenu open={mobileMenuIsOpen}/>
      <PrintButton />
      {customizeSheetMarkup}
      {designSheetMarkup}
      <Overlay isOpen={overlayIsOpen} onClick={closeOverlays}/>
    </div>
  );
}

export default App;
