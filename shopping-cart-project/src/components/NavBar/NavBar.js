import './NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrShop } from 'react-icons/gr';

function NavBar({ navHeight }) {
    return (
        <nav 
            className='nav-section'
            style={{top: `${-navHeight}px`}}
        >
            <ul className='nav-bar'>
                <li className='nav-button'><AiOutlineMenu /></li>
                <li className='logo nav-button'>M</li>
                <ul className='nav-bar inner'>
                    <li className='nav-button'><BsSearch /></li>
                    <li className='nav-button'><GrShop /></li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;