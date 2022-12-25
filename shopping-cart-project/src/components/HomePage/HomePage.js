import './HomePage.css';
import { BsChevronRight } from 'react-icons/bs'

function HomePage({ navHeight }) {
    return (
        <div className='home-page'>
            <div 
                className="unit-copy-wrapper"
                style={{top: `${navHeight}px`}}
            >
                <h2 className="headline">Messi Apparel</h2>
                <h3 className="sub-headline">World champion</h3>
                <div className="cta-link">
                    <a href="/">Shop now</a>
                    <div className='shop-now-icon'><BsChevronRight /></div>
                </div>
            </div>
            <div className="unit-image-wrapper">
                <figure className="unit-image"></figure>
            </div>
        </div>
    );
};

export default HomePage;