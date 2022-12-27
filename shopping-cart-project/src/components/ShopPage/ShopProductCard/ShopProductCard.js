import './ShopProductCard.css';

const imgURL = 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/1642dcf706704ccab2b3aef500c60724_9366/argentina-game-day-travel-pants.jpg';

function ShopProductCard() {
    return (
        <div className='product-card'>
            <div className='product-image-container'>
                <img className='product-image' src={imgURL} alt='product'/>
            </div>
            <div className='product-card__info'>
                <div className='product-card__name'>Argentina Game Day Travel Pants</div>
                <div className='product-card__category'>Shoes</div>
                <div className='product-card__price'>$95.00</div>
            </div>
        </div>
    );
};

export default ShopProductCard;