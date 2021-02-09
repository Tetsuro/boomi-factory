import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import Preview from './components/Preview';
import FooterMenu from './components/FooterMenu';
import Sheet from './components/Sheet';
import ColorsList from './components/ColorsList';
import MobileMenu from './components/MobileMenu';
import Overlay from './components/Overlay';
import { EyesList } from './components/EyesList';
import { colors } from './data/colors.json';

import { useKeyPress } from './hooks/useKeyPress';

import styles from './App.module.scss';

function App() {
  const [designSheetIsOpen, setDesignSheetIsOpen] = useState(false);
  const [customizeSheetIsOpen, setCustomizeSheetIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeEyes, setActiveEyes] = useState('original');

  const { t } = useTranslation();

  const handleSheetClose = () => {
    setDesignSheetIsOpen(false);
    setCustomizeSheetIsOpen(false);
  };

  const handleSwatchClick = (color) => {
    setActiveColor(color);
  };

  const handleEyesClick = (eyes) => {
    setActiveEyes(eyes);
  };

  const customizeSheetMarkup = (
    <Sheet
      title={t('customize.select_colors')}
      onClose={handleSheetClose}
      isOpen={customizeSheetIsOpen}
    >
      <ColorsList activeColor={activeColor} onSwatchClick={handleSwatchClick} />
    </Sheet>
  );

  const designSheetMarkup = (
    <Sheet
      title={t('customize.select_eyes')}
      onClose={handleSheetClose}
      isOpen={designSheetIsOpen}
    >
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
  };

  const overlayIsOpen =
    mobileMenuIsOpen || customizeSheetIsOpen || designSheetIsOpen;
  const sheetIsOpen = customizeSheetIsOpen || designSheetIsOpen;

  useKeyPress(27, closeOverlays);

  return (
    <div className={styles.App}>
      <Header
        show={!sheetIsOpen}
        onMobileMenuActivatorClick={handleMobileMenuActivatorClick}
      />
      <Preview
        activeColor={activeColor}
        activeEyes={activeEyes}
        minimized={sheetIsOpen}
      />
      <MobileMenu open={mobileMenuIsOpen} />
      <FooterMenu>
        <ButtonGroup
          buttons={[
            {
              onClick: handleCustomizeClick,
              label: t('customize.select_colors'),
            },
            {
              onClick: handleDesignClick,
              label: t('customize.select_eyes'),
            },
          ]}
        />
      </FooterMenu>
      {customizeSheetMarkup}
      {designSheetMarkup}
      <Overlay
        isOpen={overlayIsOpen}
        transparent={sheetIsOpen}
        onClick={closeOverlays}
      />
    </div>
  );
}

export default App;
