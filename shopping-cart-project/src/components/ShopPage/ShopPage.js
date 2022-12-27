import './ShopPage.css';
import ShopProductCard from './ShopProductCard/ShopProductCard';
import React, { useState, useEffect } from 'react';
import AllProductDetails from './AllProductDetails';

const initProductDetails = AllProductDetails;

function ShopPage() {
    const totalProducts = initProductDetails.length;

    return (
        <div className='shop-page' >
            <div className='shop-page-wrapper'>
                <div className='shop-header'>
                    <h3>All items ({totalProducts})</h3>
                </div>
                <div className='shop-categories'>
                    <div className='category'>Tops</div>
                    <div className='category'>Bottoms</div>
                    <div className='category'>Shoes</div>
                    <div className='category'>Accessories</div>
                </div> 
                <div className='product-cards'>
                    {initProductDetails.map(product => {
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