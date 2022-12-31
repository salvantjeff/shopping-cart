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

  const initProduct = {
      "name": "Samba Argentina Shoes",
      "category": "Shoes",
      "price": 100.00,
      "imgURL": "https://assets.adidas.com/images/w_600,f_auto,q_auto/2bf0242d0b83433d9b8baedd00f54ba6_9366/Samba_Argentina_Shoes_Blue_HQ7037.jpg",
      "id": "8edaf924-4917-408b-8ed9-dfb725b40d8f"
  };
  const initProduct2 = {
      "name": "Argentina 2022 Winners Hoodie",
      "category": "Tops",
      "price": 60.01,
      "imgURL": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/352ce367437f4bda8386af6b00f54f31_9366/Argentina_2022_Winners_Hoody_White_IS5477_01_laydown.jpg",
      "id": "b27df7a7-a796-498b-838a-1bf2c93cd96c"
  };

  const [cartItems, setCartItems] = useState([
      {
          product: initProduct,
          quantity: 1,
      },
      {
          product: initProduct2,
          quantity: 1,
      },
  ]);

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
          <NavBar/>
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
