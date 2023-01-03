import './Menu.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Menu() {

    function handleMenuClicked() {
        document.body.classList.add('hideMenu');
    };
    
    document.body.classList.add('hideMenu');

    useEffect(() => {
        const menuPage = document.querySelector('.menu');
        const closeButton = document.querySelector('.close-menu');

        closeButton.addEventListener('click', () => {
            menuPage.setAttribute('closing', "");

            menuPage.addEventListener('animationend', () => {
                menuPage.removeAttribute('closing');
                handleMenuClicked();
            }, {once: true});
        });
    });

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="menu-header">
                    <div onClick={handleMenuClicked} className="close-menu">
                        <GrClose />
                    </div>
                </div>
                <ul className="menu-items">
                    <Link onClick={handleMenuClicked} className='links' to="/shopping-cart">
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