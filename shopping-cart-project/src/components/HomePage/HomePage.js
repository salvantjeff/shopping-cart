import './HomePage.css';
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='home-page'>
            <div className="unit-copy-wrapper">
                <h2 className="headline">Messi Apparel</h2>
                <h3 className="sub-headline">World champion</h3>
                <Link className='shop-link' to='/shop'>
                    <div className="cta-link">
                        <p>Shop now</p>
                        <div className='shop-now-icon'><BsChevronRight /></div>
                    </div>
                </Link>
            </div>
            <div className="unit-image-wrapper">
                <figure className="unit-image"></figure>
            </div>
        </div>
    );
};

export default HomePage;