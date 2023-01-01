import './ShopPage.css';
import ShopProductCard from './ShopProductCard/ShopProductCard';
import React, { useState } from 'react';
import {
    TopsProductDetails,
    BottomsProductDetails,
    ShoesProductDetails,
    AccessoriesProductDetails
} from '../../data/filteredProducts';
import allProducts from '../../data/availableProducts.json';

function ShopPage() {
    const categories = {
        all: allProducts,
        tops: TopsProductDetails,
        bottoms: BottomsProductDetails,
        shoes: ShoesProductDetails,
        accessories: AccessoriesProductDetails,
    };

    const [productDetails, setProductDetails] = useState(categories.all)
    const totalProducts = productDetails.length;
    const [categoryTitle, setCategoryTitle] = useState('ALL');

    function handleCategoryClicked(e) {
        const category = e.target.dataset.category;
        const newProducts = [...categories[category]];
        setCategoryTitle(category.toUpperCase());
        setProductDetails(newProducts)
    };
    console.log('LOOK HERE', allProducts);
    return (
        <div className='shop-page' >
            <div className='shop-page-wrapper'>
                <div className='shop-header'>
                    <h3>
                        {categoryTitle} ({totalProducts})
                    </h3>
                </div>
                <div className='shop-categories'>
                    <div onClick={handleCategoryClicked} className='category' data-category='all'>All</div>
                    <div onClick={handleCategoryClicked} className='category' data-category='tops'>Tops</div>
                    <div onClick={handleCategoryClicked} className='category' data-category='bottoms'>Bottoms</div>
                    <div onClick={handleCategoryClicked} className='category' data-category='shoes'>Shoes</div>
                    <div onClick={handleCategoryClicked} className='category' data-category='accessories'>Accessories</div>
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