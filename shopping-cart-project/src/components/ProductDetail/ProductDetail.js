import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import allProducts from '../../data/availableProducts.json';
import { useEffect, useState } from 'react';
import emi from '../../img/emi.webp';

function ProductDetail({ handleAddToBag }) {
    const { id } = useParams();    
    const [currProduct, setCurrProduct] = useState(
        {
            name: 'No current item',
            category: 'Shop',
            price: 0.00,
            imgURL: emi,
            id: id,
        }
    );

    useEffect(() => {
        const targetProduct = allProducts.filter((product) => product.id === id);
        setCurrProduct(targetProduct[0]);
    }, []);

    useEffect(() => {
        const targetProduct = allProducts.filter((product) => product.id === id);
        setCurrProduct(targetProduct[0]);
    }, [id]);
    
    document.body.classList.add('hideSearch');

    return (
        <div className='product-detail'>
            <div className='product-detail-wrapper'>
                <div className='product-detail-header'>
                    <h3>{currProduct.name}</h3>
                    <p>{currProduct.category}</p>
                    <p>${currProduct.price}</p>
                </div>
                <div className='product-detail-figure'>
                    <img className='product-detail-image' src={currProduct.imgURL} alt='product'/>
                </div>
                <div className='product-detail-buttons'>
                    <button 
                        data-id={currProduct.id}
                        onClick={handleAddToBag} 
                        className='add-to-bag'
                    >Add to Bag</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;