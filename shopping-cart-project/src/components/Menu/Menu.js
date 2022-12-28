import './Menu.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Menu() {

    function handleMenuClicked() {
        document.body.classList.add('hideMenu');
    };
    
    document.body.classList.add('hideMenu');

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="menu-header">
                    <div onClick={handleMenuClicked} className="close-menu">
                        <GrClose />
                    </div>
                </div>
                <ul className="menu-items">
                    <Link onClick={handleMenuClicked} className='links' to="/">
                        <li className='menu-item'>Home</li>
                    </Link>
                    <Link onClick={handleMenuClicked} className='links' to="/shop">
                        <li className='menu-item'>Shop</li>
                    </Link>
                    <Link onClick={handleMenuClicked} className='links' to="/support">
                        <li className='menu-item'>Support</li>
                    </Link>
                </ul>
            </div>
        </div>  
    );
};


            
export default Menu;