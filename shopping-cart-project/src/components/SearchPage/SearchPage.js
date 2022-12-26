import './SearchPage.css';
import { GrClose, GrSearch } from 'react-icons/gr';

function SearchPage() {
    return (
        <div className="search-page">
            <div className="search-wrapper">
                <div className="search-header">
                    <div className="search-bar">
                        <div className='search-bar-button'><GrSearch /></div>
                        <input className='search-input' type="text" />
                        <div className='search-bar-button'><GrClose /></div>
                    </div>
                    <div>
                        <button className='cancel-button'>Cancel</button>
                    </div>
                </div>
                <div className='search-content'>
                    <ul className="popular-items">
                        <p className='popular-heading'>Popular items</p>
                        <li className='popular-item'>Messi Jersey</li>
                        <li className='popular-item'>Messi world cup cleats</li>
                        <li className='popular-item'>Messi ball</li>
                    </ul>
                </div>
            </div>
        </div>  
    );
};

export default SearchPage;
