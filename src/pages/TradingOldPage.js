import React, { useState, useContext, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from '../contexts/ThemeContext';

// // import styling
import '../assets/css/common.css';
import '../assets/css/hero.css';
import '../assets/css/navbar.css';
import '../assets/css/trading-view.css';
import '../assets/css/trading-dashboard.css';
import '../assets/css/search-input.css';
import '../assets/css/mobile-section.css';
import '../assets/css/profile.css';
import '../assets/css/popup.css';
import '../assets/css/mobile-leaderboard.css';

// import components
import Chart from '../components/trading-view/Chart';
import Navbar from '../components/trading-view/Navbar';
import LongShort from '../components/trading-view/LongShort';
import CryptoForex from '../components/trading-view/CryptoForex';

import PopupOverlay from '../components/trading-view/mobile-view/PopupOverlay';
import LongShortButton from '../components/trading-view/mobile-view/LongShortButton';
import LowBalanceOverlay from '../components/trading-view/mobile-view/LowBalanceOverlay';
import Liquidity from '../components/trading-view/mobile-view/Liquidity';
import ActivityMobile from '../components/trading-view/mobile-view/ActivityMobile';

import OpenTrads from '../components/trading-view/OpenTrades';
import OpenOrders from '../components/trading-view/OpenOrders';

import MediumSection from '../components/trading-view/MediumSection';

import AllTrades from '../components/trading-view/AllTrades';
import LeaderBoard from '../components/trading-view/LeaderBoard';
import PersonalTrading from '../components/trading-view/PersonalTrading';

import NFTOrders from '../components/trading-view/NFTOrders';

import Footer from '../components/trading-view/Footer';

import LeaderBoardMobile from '../components/trading-view/mobile-view/LeaderBoardMobile';

function App() {
  const bottomRef = useRef();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [showSearch, setShowSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLowBalanceOverlay, setShowLowBalanceOverlay] = useState(false);

  const [showLongShort, setShowLongShort] = useState(false);

  const handleShowLongShort = () => {
    setShowLongShort(true);
    setShowLowBalanceOverlay(true);
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  // onHidePaymentOverlay
  return (
    <div>
      <Navbar
        mode={darkMode}
        setMode={setDarkMode}
        onShowSearch={() => setShowSearch(true)}
        onShowOverlay={() => setShowOverlay(true)}
      />
      {showSearch && <CryptoForex onHideSearch={() => setShowSearch(false)} />}
      {showOverlay && <PopupOverlay onHideOverlay={() => setShowOverlay(false)} />}
      {showLowBalanceOverlay && <LowBalanceOverlay onHidePaymentOverlay={() => setShowLowBalanceOverlay(false)} />}

      <div className="trading-panel row">
        <Chart mode={darkMode} />
        <LongShort mode={darkMode} />
      </div>
      <div className="trading-container">
        <OpenTrads />
        <OpenOrders />
      </div>
      <MediumSection />
      <div className="all-trades-container">
        <div className="row">
          <div className="left-trade col-6">
            <AllTrades />
          </div>
          <div className="right-trade col-6">
            <LeaderBoard />
            <PersonalTrading />
          </div>
        </div>
        <NFTOrders />
      </div>
      <Footer />

      {/* Mobile version */}
      <div className="mobile-version-section">
        <Navbar mode={darkMode} setMode={setDarkMode} onShowSearch={() => setShowSearch(true)} />
        <Tabs className="mobile-section-tab">
          <TabPanel>
            <div className="mobile-tab-body" style={{ overflow: `${showLongShort ? 'auto' : 'hidden'}` }}>
              <div className="trading-panel row">
                <Chart mode={darkMode} />
                {showLongShort && <LongShort mode={darkMode} />}
                {!showLongShort && <LongShortButton onShowLongShort={handleShowLongShort} />}
                <div ref={bottomRef} style={{ height: 'calc(100vh - 130px)' }} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body">
              <ActivityMobile />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body right-trade">
              <LeaderBoardMobile />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body">
              <Liquidity />
            </div>
          </TabPanel>
          <TabList className="tab-buttons">
            <Tab>
              <img src="/static/icons/trade.png" alt="trade" className="tab-button-icon" />
              <p>Trade</p>
            </Tab>
            <Tab onClick={() => setShowLongShort(false)}>
              <img src="/static/icons/activity.png" alt="activity" className="tab-button-icon" />
              <p>Activity</p>
            </Tab>
            <Tab onClick={() => setShowLongShort(false)}>
              <img src="/static/icons/leadboard.png" alt="leaderboard" className="tab-button-icon" />
              <p>LeaderBoard</p>
            </Tab>
            <Tab onClick={() => setShowLongShort(false)}>
              <img src="/static/icons/liquidity.png" alt="liquidity" className="tab-button-icon" />
              <p>Liquidity</p>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
