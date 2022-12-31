import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrShop } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function NavBar() {

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
                <li onClick={handleMenuClicked} className='nav-button'>
                    <AiOutlineMenu />
                    {/* <Link className='links' to='/menu'><AiOutlineMenu /></Link>   */}
                </li>
                <li className='logo nav-button'>
                    <Link className='links' to='/'>M</Link>
                </li>
                <ul className='nav-bar inner'>
                    <li onClick={handleSearchClicked} className='nav-button'>
                        <BsSearch />
                        {/* <Link className='links' to='/search'><BsSearch /></Link> */}
                    </li>
                    <li onClick={handleCartClicked} className='nav-button shop-bag'>
                        <GrShop />
                        <div className='cart-count'>0</div>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;