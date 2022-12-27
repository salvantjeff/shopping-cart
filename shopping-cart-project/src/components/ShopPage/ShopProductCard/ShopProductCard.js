import './ShopProductCard.css';
import { Link } from 'react-router-dom';

function ShopProductCard({ product }) {
    return (
        <Link className='links' to={`/shop/${product.id}`}>
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
        </Link>
    );
};

export default ShopProductCard;