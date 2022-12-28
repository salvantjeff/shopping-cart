import './SearchPage.css';
import { GrClose, GrSearch } from 'react-icons/gr';
import { useState } from 'react';

function SearchPage() {

    function handleSearchClicked() {
        document.body.classList.add('hideSearch');
    };

    const [searchItem, setSearchItem] = useState('');
    function handleOnChange(e) {
        const newSearchItem = e.target.value;
        setSearchItem(newSearchItem);
    };

    function handleClearSearch() {
        setSearchItem('');
    };

    return (
        <div className="search-page">
            <div className="search-wrapper">
                <div className="search-header">
                    <div className="search-bar">
                        <label 
                            htmlFor='search-bar-button' 
                            className='search-bar-button'
                        ><GrSearch /></label>
                        <input 
                            id='search-bar-button'
                            className='search-input' 
                            type="text" 
                            name='search'
                            value={searchItem}
                            onChange={handleOnChange}
                        />
                        <div onClick={handleClearSearch} className='search-bar-button'>
                            <GrClose />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSearchClicked} className='cancel-button'>Cancel</button>
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
