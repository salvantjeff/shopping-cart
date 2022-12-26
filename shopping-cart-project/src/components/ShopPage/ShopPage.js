import './ShopPage.css';

const imgURL = 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d66ee9ef09e24a1d94aeaedd00f57a08_9366/samba-argentina-shoes.jpg';
const imgURL2 = 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/82fb5a08f3674df09a32af1f00dd0be4_9366/x-speedportal-leyenda.1-firm-ground-soccer-cleats.jpg';
const imgURL3 = 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/6af8fc9d62e34d66b31baf500038c525_9366/argentina-2022-winners-tee.jpg';
const imgURL4 = 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/4eaa8ab7680c4c559b14aebc00f7087a_9366/messi-condivo-22-half-pants.jpg';

function ShopPage() {
    return (
        <div className='shop-page'>
            <div className='shop-page-wrapper'>
                <div className='shop-header'>
                    <h3>All items (25)</h3>
                </div>
                <div className='shop-categories'>
                    <div>Tops</div>
                    <div>Bottoms</div>
                    <div>Shoes</div>
                    <div>Accessories</div>
                </div>
                <div className='product-cards'>
                    <div className='product-card'>
                        <div className='product-image-container'>
                            <img className='product-image' src={imgURL} alt='product'/>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>Samba Argentina Shoes</div>
                            <div className='product-card__category'>Shoes</div>
                            <div className='product-card__price'>$100.00</div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-image-container'>
                            <img className='product-image' src={imgURL2} alt='product'/>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>X Speedportal Leyenda.1 Firm Ground</div>
                            <div className='product-card__category'>Shoes</div>
                            <div className='product-card__price'>$120.00</div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-image-container'>
                            <img className='product-image' src={imgURL3} alt='product'/>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>X Speedportal Leyenda.1 Firm Ground</div>
                            <div className='product-card__category'>Shoes</div>
                            <div className='product-card__price'>$120.00</div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-image-container'>
                            <img className='product-image' src={imgURL4} alt='product'/>
                        </div>
                        <div className='product-card__info'>
                            <div className='product-card__name'>X Speedportal Leyenda.1 Firm Ground</div>
                            <div className='product-card__category'>Shoes</div>
                            <div className='product-card__price'>$120.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;