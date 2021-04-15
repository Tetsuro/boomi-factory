import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

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

import { About, HowToBuild, Gallery } from './pages';

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

  let location = useLocation();
  let history = useHistory();

  const modalIsOpen = location.state && location.state.modalIsOpen;

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
    history.push('/');
  };

  const handleMobileMenuActivatorClick = () => {
    mobileMenuIsOpen ? setMobileMenuIsOpen(false) : setMobileMenuIsOpen(true);
  };

  const overlayIsOpen =
    mobileMenuIsOpen ||
    customizeSheetIsOpen ||
    designSheetIsOpen ||
    modalIsOpen;
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
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/how-to-build'>
            <HowToBuild />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
        </Switch>
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
        <MobileMenu
          open={mobileMenuIsOpen}
          onAnyLinkClick={handleMobileMenuActivatorClick}
        />
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
