import './CartItem.css';

function CartItem({ product, quantity, index, handleAddQuantity}) {
    return (
        <div className='cart-item'>
            <div className='cart-item__image-container'>
                <img className='cart-item__image' src={product.imgURL} alt='cart item'/>
            </div>
            <div className='cart-item__details'>
                <div className='cart-item__name'>{product.name}</div>
                <div className='cart-item__category'>{product.category}</div>
                <div className='cart-item__counter'>
                    <div className='minus-button' data-index={index}>-</div>
                    <p className='cart-item__quantity'>{quantity}</p>
                    <div onClick={handleAddQuantity} className='add-button' data-index={index}>+</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;