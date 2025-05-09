import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import Controls from './components/Controls';
import Navabar from './components/Navabar';
import Home from './components/Home';
import Iphone from './components/Iphone';
import MacBook from './components/MacBook';
import Watch from './components/Watch';
import Imac from './components/Imac';
import Pagetransition from './components/Pagetransition';

const App = () => {
  const [message, setMessage] = useState('');
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [showFrame, setShowFrame] = useState(true);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    fetch('http://localhost/backend/index.php')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const closeFrame = () => {
    setShowFrame(false);
  };

  const resetPage = () => {
    setActivePage(0);
  };

  return showFrame ? (
    <div className='w-full h-screen grid place-items-center'>
      <div className={`${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : ''} 
        w-[70vw] h-[85vh] min-w-[85vh] min-h-[85vh] max-w-[90vw] max-h-[90vh]  
        border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}>
        
        <Navabar activePage={activePage} handleNavClick={handleNavClick} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} closeFrame={closeFrame} resetPage={resetPage} activePage={activePage} />
        <div className='flex-grow'>
          <Pagetransition activePage={activePage}>
            {[
              <Home key="home" onNavigate={handleNavClick} />,
              <Iphone key="iphone" />,
              <MacBook key="macbook" />,
              <Watch key="watch" />,
              <Imac key="imac" />
            ]}
          </Pagetransition>
        </div>
      </div>
    </div>
  ) : null;
};

export default App;