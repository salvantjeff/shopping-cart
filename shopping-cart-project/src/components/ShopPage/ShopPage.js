import './ShopPage.css';
import ShopProductCard from './ShopProductCard/ShopProductCard';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import winnersHoodie from '../../img/winners-hoodie.webp';
import AllProductDetails from './AllProductDetails';

const initProductDetails = AllProductDetails;

function ShopPage() {

    const [productDetails, setProductDetails] = useState(initProductDetails);

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
                    {productDetails.map(product => {
                        return (
                            <ShopProductCard key={product.id} product={product}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;