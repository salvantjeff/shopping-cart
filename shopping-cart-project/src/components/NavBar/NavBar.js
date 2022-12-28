import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrShop } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [hideMenu, setHideMenu] = useState(true);

    if (hideMenu) {
        document.body.classList.add('hideMenu');
    } else {
        document.body.classList.remove('hideMenu');
    }

    function handleMenuClicked() {
        setHideMenu(!hideMenu);
        console.log('you clicked on menu icon');
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
                    <li className='nav-button'>
                        <Link className='links' to='/search'><BsSearch /></Link>
                    </li>
                    <li className='nav-button'><GrShop /></li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;