import './CartPage.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem/CartItem';

function CartPage() {
    return (
        <div className="cart-page">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h3>Your Shopping Cart</h3>
                    <button className='close-button'><GrClose /></button>
                </div>
                <div className='cart-content'>
                    <div className='cart-items'>
                       <CartItem />
                       <CartItem />
                       <CartItem />
                    </div>
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