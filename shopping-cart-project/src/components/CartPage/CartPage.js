import './CartPage.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem/CartItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cartItems, setCartItems }) {
    
    const [totalPrice, setTotalPrice] = useState(0.00);

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

    useEffect(() => {
        function checkItems() {
            let hasZeroItem = false;
            let idx;
            for (let i = 0; i < cartItems.length; i++) {
                const currQuantity = cartItems[i].quantity;
                if (currQuantity <= 0) {
                    hasZeroItem = true;
                    idx = i;
                };
            };
            if (hasZeroItem) {
                const newCartItems = cartItems.filter((item, i) => i !== idx);
                setCartItems(newCartItems);
            };
        };
        checkItems();
    }, [cartItems]);

    useEffect(() => {
        function updateTotalPrice() {
            let currTotalPrice = 0.00;
            const currentCartItems = [...cartItems];
            for (let i = 0; i < currentCartItems.length; i++) {
                const currentElem = currentCartItems[i];
                const productPrice = currentElem.product.price;
                const productQuantity = currentElem.quantity;
                currTotalPrice += productPrice * productQuantity;
            };
            if (totalPrice !== currTotalPrice) {
                setTotalPrice(currTotalPrice);
            };
        };
        updateTotalPrice();
    }, [cartItems]);

    return (
        <div className="cart-page">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h3>Your Shopping Cart</h3>
                    <button onClick={handleCloseCart} className='close-button'><GrClose /></button>
                </div>
                <div className='cart-content'>
                    {cartItems.length > 0 ? 
                        cartItems.map((item, index) => {
                            return (
                                <div key={item.product.id} className='cart-items'>
                                    <CartItem 
                                        product={item.product} 
                                        quantity={item.quantity} 
                                        index={index}
                                        handleAddQuantity={handleAddQuantity} 
                                        handleDecreaseQuantity={handleDecreaseQuantity}  
                                        handleCloseCart={handleCloseCart} 
                                    />
                                </div>
                            );
                        }) :
                        <div>
                            <p className='empty-cart-message'>Your bag is empty</p>
                        </div> 
                    }
                </div>
                <div className='cart-checkout-footer'>
                    <div className='cart-total-wrapper'>
                        <p className='cart-total-label'>Total</p>
                        <p className='cart-total-price'>${Number(totalPrice).toFixed(2)}</p>
                    </div>
                    <Link onClick={handleCloseCart} className='links checkout-link' to='/checkout'>
                        <div className='checkout-button'>Checkout</div>
                    </Link>
                </div>
            </div>
        </div>  
    );
};

export default CartPage;