import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import Preview from './components/Preview';
import FooterMenu from './components/FooterMenu';
import Sheet from './components/Sheet';
import ColorsList from './components/ColorsList';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';
import Overlay from './components/Overlay';
import BluePrint from './components/BluePrint';
import { EyesList } from './components/EyesList';
import { colors } from './data/colors.json';

import { useKeyPress } from './hooks/useKeyPress';

import styles from './App.module.scss';

function App() {
  const [designSheetIsOpen, setDesignSheetIsOpen] = useState(false);
  const [customizeSheetIsOpen, setCustomizeSheetIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeEyes, setActiveEyes] = useState('Original');
  const [activeTab, setActiveTab] = useState(0);

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

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const colorsListMarkup = (
    <ColorsList activeColor={activeColor} onSwatchClick={handleSwatchClick} />
  );

  const colorSheetMarkup = (
    <Sheet
      title={t('customize.select_colors')}
      onClose={handleSheetClose}
      isOpen={customizeSheetIsOpen}
    >
      {colorsListMarkup}
    </Sheet>
  );

  const eyesListMarkup = (
    <EyesList activeEyes={activeEyes} onEyesClick={handleEyesClick} />
  );

  const eyeSheetMarkup = (
    <Sheet
      title={t('customize.select_eyes')}
      onClose={handleSheetClose}
      isOpen={designSheetIsOpen}
    >
      {eyesListMarkup}
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

  function print() {
    window.print();
  }

  return (
    <div className={styles.App}>
      <Header
        show={!sheetIsOpen}
        onMobileMenuActivatorClick={handleMobileMenuActivatorClick}
      />
      <div className={styles.Body}>
        <Preview
          activeColor={activeColor}
          activeEyes={activeEyes}
          minimized={sheetIsOpen}
        />
        <DesktopMenu
          activeTab={activeTab}
          tabs={[
            {
              label: t('customize.select_colors'),
              content: colorsListMarkup,
            },
            {
              label: t('customize.select_eyes'),
              content: eyesListMarkup,
            },
          ]}
          footerAction={{
            label: t('print'),
            onClick: print,
          }}
          onTabClick={handleTabClick}
        />
        <MobileMenu open={mobileMenuIsOpen} />
        <FooterMenu show={!sheetIsOpen} label={t('print')} onClick={print}>
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
        {colorSheetMarkup}
        {eyeSheetMarkup}
        <Overlay
          isOpen={overlayIsOpen}
          transparent={sheetIsOpen}
          onClick={closeOverlays}
        />
      </div>
      <BluePrint activeColor={activeColor} activeEyes={activeEyes} />
    </div>
  );
}

export default App;
