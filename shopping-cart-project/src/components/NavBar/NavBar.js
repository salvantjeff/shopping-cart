import './NavBar.css';

function NavBar({ navHeight }) {
    return (
        <nav 
            className='nav-section'
            style={{top: `${-navHeight}px`}}
        >
            <ul className='nav-bar'>
                <li>menu</li>
                <li>M</li>
                <li>search</li>
                <li>Bag</li>
            </ul>
        </nav>
    );
};

export default NavBar;