import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import allProducts from '../../data/availableProducts.json';
import { useEffect, useState } from 'react';

const imgURL = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/19e0246e-ba01-4900-8fc1-67e6752f0c48/air-jordan-1-retro-high-og-mens-shoes-ZdCsZM.png';

function ProductDetail() {
    const { id } = useParams();    
    const [currProduct, setCurrProduct] = useState(
        {
            name: 'No current item',
            category: 'Shop',
            price: 0.00,
            imgURL: imgURL,
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
                    <button className='add-to-bag'>Add to Bag</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;