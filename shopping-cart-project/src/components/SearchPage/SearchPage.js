import './SearchPage.css';
import { GrClose, GrSearch } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../../data/availableProducts.json';

function SearchPage() {
    console.log('Data =>',allProducts[0].id);
    const [popularItems, setPopularItems] = useState([
        allProducts[0],
        allProducts[1],
        allProducts[2],
    ]);

    console.log(popularItems);
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

    useEffect(() => {
        document.body.classList.remove('hideSearch');
    }, [searchItem]);

    document.body.classList.add('hideSearch');
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
                        {popularItems.map(item => {
                            return (
                                <Link key={item.id} className='links' to={`/shop/${item.id}`}>
                                    <li onClick={handleSearchClicked} className='popular-item'>{item.name}</li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>  
    );
};

export default SearchPage;
