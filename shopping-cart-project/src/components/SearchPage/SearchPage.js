import './SearchPage.css';
import { GrClose, GrSearch } from 'react-icons/gr';
import { useState } from 'react';
import { AllProductDetails } from '../ShopPage/AllProductDetails';

function SearchPage() {
    const popularItems = {
        item1: AllProductDetails[0],
        item2: AllProductDetails[1],
        item3: AllProductDetails[2],
    };
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
                        <li className='popular-item'>{popularItems.item1.name}</li>
                        <li className='popular-item'>{popularItems.item2.name}</li>
                        <li className='popular-item'>{popularItems.item3.name}</li>
                    </ul>
                </div>
            </div>
        </div>  
    );
};

export default SearchPage;
