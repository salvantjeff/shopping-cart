import './CartPage.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem/CartItem';
import { useState } from 'react';

function CartPage() {
    const initProduct = {
        "name": "Samba Argentina Shoes",
        "category": "Shoes",
        "price": 100,
        "imgURL": "https://assets.adidas.com/images/w_600,f_auto,q_auto/2bf0242d0b83433d9b8baedd00f54ba6_9366/Samba_Argentina_Shoes_Blue_HQ7037.jpg",
        "id": "8edaf924-4917-408b-8ed9-dfb725b40d8f"
    };

    const [cartItems, setCartItems] = useState([
        {
            product: initProduct,
            quantity: 1,
        },
    ]);
    
    function handleCloseCart() {
        document.body.classList.add('hideCart');
    };
    
    document.body.classList.add('hideCart');

    return (
        <div className="cart-page">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h3>Your Shopping Cart</h3>
                    <button onClick={handleCloseCart} className='close-button'><GrClose /></button>
                </div>
                <div className='cart-content'>
                    {cartItems.map(item => {
                        return (
                            <div key={item.product.id} className='cart-items'>
                                <CartItem product={item.product} quantity={item.quantity}/>
                            </div>
                        );
                    })}
                   
                    {/* <div>
                        <p className='empty-cart-message'>Your bag is empty</p>
                    </div> */}
                </div>
                <div className='cart-checkout-footer'>
                    <div className='cart-total-wrapper'>
                        <p className='cart-total-label'>Total</p>
                        <p className='cart-total-price'>$0.00</p>
                    </div>
                    <a href='/' className='checkout-link'>
                        <div className='checkout-button'>Checkout</div>
                    </a>
                </div>
            </div>
        </div>  
    );
};

export default CartPage;