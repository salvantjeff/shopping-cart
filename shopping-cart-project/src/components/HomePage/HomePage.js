import './HomePage.css';
import { BsChevronRight } from 'react-icons/bs'

function HomePage({ navHeight }) {
    return (
        <div>
            <div className="unit-copy-wrapper">
                <h2 className="headline">Messi Apparel</h2>
                <h3 className="sub-headline">World champion</h3>
                <div className="cta-link">
                    <a href="/">Shop now</a>
                    <div className='shop-now-icon'><BsChevronRight /></div>
                </div>
            </div>
            <div 
                className="unit-image-wrapper"
                style={{
                    top: navHeight
                }}
            >
                <figure className="unit-image"></figure>
            </div>
        </div>
    );
};

export default HomePage;