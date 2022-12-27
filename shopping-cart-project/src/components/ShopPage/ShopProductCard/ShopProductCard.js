import './ShopProductCard.css';

function ShopProductCard({ product }) {
    return (
        <div className='product-card'>
            <div className='product-image-container'>
                <img className='product-image' src={product.imgURL} alt='product'/>
            </div>
            <div className='product-card__info'>
                <div className='product-card__name'>{product.name}</div>
                <div className='product-card__category'>{product.category}</div>
                <div className='product-card__price'>${product.price}</div>
            </div>
        </div>
    );
};

export default ShopProductCard;