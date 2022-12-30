import './CartPage.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem/CartItem';
import { useEffect, useState } from 'react';

function CartPage() {
    const initProduct = {
        "name": "Samba Argentina Shoes",
        "category": "Shoes",
        "price": 100,
        "imgURL": "https://assets.adidas.com/images/w_600,f_auto,q_auto/2bf0242d0b83433d9b8baedd00f54ba6_9366/Samba_Argentina_Shoes_Blue_HQ7037.jpg",
        "id": "8edaf924-4917-408b-8ed9-dfb725b40d8f"
    };
    const initProduct2 = {
        "name": "Argentina 2022 Winners Hoodie",
        "category": "Tops",
        "price": 60,
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
    
    useEffect(() => {
        document.body.classList.add('hideCart');
    }, []);

    function handleCloseCart() {
        document.body.classList.add('hideCart');
    };

    function handleAddQuantity(e) {
        const index = parseInt(e.target.dataset.index);
        console.log(index);
        const newCartItems = cartItems.map((product, i) => {
            if (index === i) {
                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            }
            return product;
        });
        setCartItems(newCartItems);
    };

    function handleDecreaseQuantity(e) {
        const index = parseInt(e.target.dataset.index);
        console.log(index);
        const newCartItems = cartItems.map((product, i) => {
            if (index === i) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            }
            return product;
        });

        setCartItems(newCartItems);
    };

    return (
        <div className="cart-page">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h3>Your Shopping Cart</h3>
                    <button onClick={handleCloseCart} className='close-button'><GrClose /></button>
                </div>
                <div className='cart-content'>
                    {cartItems.map((item, index) => {
                        return (
                            <div key={item.product.id} className='cart-items'>
                                <CartItem 
                                    product={item.product} 
                                    quantity={item.quantity} 
                                    index={index}
                                    handleAddQuantity={handleAddQuantity} 
                                    handleDecreaseQuantity={handleDecreaseQuantity}   
                                />
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