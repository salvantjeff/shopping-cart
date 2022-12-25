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
                <li><AiOutlineMenu /></li>
                <li className='logo'>M</li>
                <ul className='nav-bar inner'>
                    <li><BsSearch /></li>
                    <li><GrShop /></li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;