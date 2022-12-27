import './ProductDetail.css';
import { useParams } from 'react-router-dom';

const imgURL = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/19e0246e-ba01-4900-8fc1-67e6752f0c48/air-jordan-1-retro-high-og-mens-shoes-ZdCsZM.png';

function ProductDetail() {
    const { id } = useParams();
    console.log('--->', id);
    return (
        <div className='product-detail'>
            <div className='product-detail-wrapper'>
                <div className='product-detail-header'>
                    <h3>Air Jordan 1 Retro High OG</h3>
                    <p>Men's Shoes</p>
                    <p>$180</p>
                </div>
                <div className='product-detail-figure'>
                    <img className='product-detail-image' src={imgURL} alt='product'/>
                </div>
                <div className='product-detail-buttons'>
                    <button className='add-to-bag'>Add to Bag</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;