import './CartItem.css';
import { Link } from 'react-router-dom';

function CartItem({ 
    product, 
    quantity, 
    index, 
    handleAddQuantity, 
    handleDecreaseQuantity,
    handleCloseCart,
}) {
    return (
        <div className='cart-item'>
            <div className='cart-item__image-container'>
                <img className='cart-item__image' src={product.imgURL} alt='cart item'/>
            </div>
            <div className='cart-item__details'>
                <Link 
                    onClick={handleCloseCart} 
                    className='links' 
                    to={`/shop/${product.id}`}
                >
                    <div className='cart-item__name'>{product.name}</div>
                </Link>
                <div className='cart-item__category'>{product.category}</div>
                <div className='cart-item__price'>${Number(product.price).toFixed(2)}</div>
                <div className='cart-item__counter'>
                    <div 
                        onClick={handleDecreaseQuantity} 
                        className='minus-button' 
                        data-index={index}
                    >-</div>
                    <p className='cart-item__quantity'>{quantity}</p>
                    <div 
                        onClick={handleAddQuantity} 
                        className='add-button' 
                        data-index={index}
                    >+</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;