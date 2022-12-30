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
import SupportPage from './components/SupportPage/SupportPage';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavHeight(nav.offsetHeight);
    document.body.classList.add('hideSearch');
  }, []);

  document.body.classList.add('hideSearch');

  return (
    <div className="module-content">
      <div className='unit-wrapper'>
        <Router>
          <NavBar/>
          <div className='page-contents' style={{marginTop: `${navHeight}px`}}>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              {/* <Route path='/menu' element={<Menu />}/> */}
              {/* <Route path='/search' element={<SearchPage />}/> */}
              {/* <Route path='/cart' element={<CartPage />}/> */}
              <Route path='/shop' element={<ShopPage />}/>
              <Route path='/shop/:id' element={<ProductDetail />}/>
              <Route path='/support' element={<SupportPage />}/>
            </Routes>
            <Menu />
            <SearchPage />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
