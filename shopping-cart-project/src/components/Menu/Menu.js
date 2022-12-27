import './Menu.css';
import { GrClose } from 'react-icons/gr';

function Menu() {
    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="menu-header">
                    <div className="close-menu">
                        <GrClose />
                    </div>
                </div>
                <ul className="menu-items">
                    <li className='menu-item'>Home</li>
                    <li className='menu-item'>Shop</li>
                    <li className='menu-item'>Support</li>
                </ul>
            </div>
        </div>  
    );
};


            
export default Menu;