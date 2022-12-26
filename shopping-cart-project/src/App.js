import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavHeight(nav.offsetHeight);
  }, []);
  
  return (
    <div className="module-content" >
      <div className='unit-wrapper' style={{marginTop: `${navHeight}px`}} >
        <NavBar navHeight={navHeight}/>
        <HomePage navHeight={navHeight}/>
        <SearchPage />
      </div>
    </div>
  );
}

export default App;
