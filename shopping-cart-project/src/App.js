import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import SearchPage from './components/SearchPage/SearchPage';
import CartPage from './components/CartPage/CartPage';
import ShopPage from './components/ShopPage/ShopPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavHeight(nav.offsetHeight);
  }, []);
  
  return (
    <div className="module-content">
      <div className='unit-wrapper'>
        <NavBar/>
        <div className='page-contents' style={{marginTop: `${navHeight}px`}}>
          {/* <HomePage/> */}
          {/* <ShopPage /> */}
          {/* <Menu /> */}
          {/* <SearchPage /> */}
          {/* <CartPage /> */}
          <ProductDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
