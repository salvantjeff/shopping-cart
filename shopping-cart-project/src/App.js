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
import allProducts from './data/availableProducts.json';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavHeight(nav.offsetHeight);
    document.body.classList.add('hideSearch');
  }, []);

  document.body.classList.add('hideSearch');

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function countCartItems() {
      let count = 0;
      for (let item of cartItems) {
        count += item.quantity;
      };
      console.log('cart items count: ',count);
      setCartCount(count);
    };
    countCartItems()
  }, [cartItems]);

  function handleAddToBag(e) {
    console.log('Adding to bag');
    const itemID = e.target.dataset.id;
    console.log(itemID);
    let itemAlreadyInCart = false;
    for (let item of cartItems) {
      if (item.product.id === itemID) {
        itemAlreadyInCart = true;
      };
    };
    console.log('item in cart? ', itemAlreadyInCart);
 
    if (itemAlreadyInCart) {
      const newCartItems = cartItems.map((item, i) => {
        if (item.product.id === itemID) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item;
      });
      setCartItems(newCartItems);
    } else {
      const [productToAdd] = [...allProducts.filter(product => product.id === itemID)];
      console.log('Product to add: ',productToAdd);
  
      const newCartItems = [
        ...cartItems,
        {
          product: productToAdd,
          quantity: 1,
        }
      ];
      setCartItems(newCartItems);
    }
  };
  
  return (
    <div className="module-content">
      <div className='unit-wrapper'>
        <Router>
          <NavBar cartCount={cartCount}/>
          <div className='page-contents' style={{marginTop: `${navHeight}px`}}>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              {/* <Route path='/menu' element={<Menu />}/> */}
              {/* <Route path='/search' element={<SearchPage />}/> */}
              {/* <Route path='/cart' element={<CartPage />}/> */}
              <Route path='/shop' element={<ShopPage />}/>
              <Route path='/shop/:id' element={<ProductDetail handleAddToBag={handleAddToBag} />}/>
              <Route path='/support' element={<SupportPage />}/>
            </Routes>
            <Menu />
            <SearchPage />
            <CartPage cartItems={cartItems} setCartItems={setCartItems}/>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
