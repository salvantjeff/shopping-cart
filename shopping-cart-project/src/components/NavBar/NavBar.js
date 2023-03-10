import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrShop } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function NavBar({ cartCount }) {

    function handleMenuClicked() {
        document.body.classList.remove('hideMenu');
    };

    function handleSearchClicked() {
        document.body.classList.remove('hideSearch');
    };

    function handleCartClicked() {
        document.body.classList.remove('hideCart');
    };

    return (
        <nav className='nav-section'>
            <ul className='nav-bar'>
                <ul className='nav-links-desktop'>
                    <Link className='links' to='/shopping-cart'>
                        <li>Home</li>
                    </Link>
                    <Link className='links' to='/shop'>
                        <li>Shop</li>
                    </Link>
                    <Link className='links' to='/support'>
                        <li>Support</li>
                    </Link>
                </ul>
                <li onClick={handleMenuClicked} className='nav-button menu-icon'>
                    <AiOutlineMenu />
                </li>
                
                <Link className='links' to='/shopping-cart'>
                    <li className='logo nav-button'>M</li>
                </Link>

                <ul className='nav-bar inner'>
                    <li onClick={handleSearchClicked} className='nav-button'>
                        <BsSearch />
                    </li>
                    <li onClick={handleCartClicked} className='nav-button shop-bag'>
                        <GrShop />
                        <div className='cart-count'>{cartCount}</div>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;