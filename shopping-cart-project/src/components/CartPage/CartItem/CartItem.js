import './CartItem.css';

const imgURL = 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/6af8fc9d62e34d66b31baf500038c525_9366/argentina-2022-winners-tee.jpg';

function CartItem() {
    return (
        <div className='cart-item'>
            <div className='cart-item__image-container'>
                <img className='cart-item__image' src={imgURL} alt='cart item'/>
            </div>
            <div className='cart-item__details'>
                <div className='cart-item__name'>Argentina Sambas</div>
                <div className='cart-item__category'>Shoes</div>
                <div className='cart-item__counter'>
                    <div className='minus-button'>-</div>
                    <p className='cart-item__quantity'>1</p>
                    <div className='add-button'>+</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;