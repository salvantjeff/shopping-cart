import './ShopPage.css';
import ShopProductCard from './ShopProductCard/ShopProductCard';
import { v4 as uuidv4 } from 'uuid';

// const productDetails = [
//     {
//         name: '',
//         category: '',
//         price: 0,
//         imgURL: '',
//     }
// ];
function ShopPage() {
    return (
        <div className='shop-page' >
            <div className='shop-page-wrapper'>
                <div className='shop-header'>
                    <h3>All items (25)</h3>
                </div>
                <div className='shop-categories'>
                    <div className='category'>Tops</div>
                    <div className='category'>Bottoms</div>
                    <div className='category'>Shoes</div>
                    <div className='category'>Accessories</div>
                </div> 
                <div className='product-cards'>
                    <ShopProductCard />
                    <ShopProductCard />
                    <ShopProductCard />
                    <ShopProductCard />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;