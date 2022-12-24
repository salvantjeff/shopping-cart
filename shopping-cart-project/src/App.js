import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavHeight(nav.offsetHeight);
  }, []);

  console.log(navHeight);
  return (
    <div className="module-content">
      <div className='unit-wrapper'>
        <NavBar />
        <HomePage navHeight={navHeight}/>
      </div>
    </div>
  );
}

export default App;
