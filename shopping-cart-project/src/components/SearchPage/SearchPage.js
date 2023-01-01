import './SearchPage.css';
import { GrClose, GrSearch } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../../data/availableProducts.json';
import parse from 'html-react-parser';

function SearchPage() {  
    const [isTyping, setIsTyping] = useState(false);
    const initPopularItems = [
        allProducts[0],
        allProducts[1],
        allProducts[2],
    ];

    const [popularItems, setPopularItems] = useState(initPopularItems);
    const [suggestedItems, setSuggestedItems] = useState(initPopularItems);

    function handleSearchClicked() {
        document.body.classList.add('hideSearch');
    };

    const [searchItem, setSearchItem] = useState('');
    function handleOnChange(e) {
        const newSearchItem = e.target.value;
        setSearchItem(newSearchItem);
        setIsTyping(true);
    };

    function handleClearSearch() {
        setSearchItem('');
    };

    useEffect(() => {
        document.body.classList.remove('hideSearch');
        displayMatches();
    }, [searchItem]);

    function findMatches(wordToMatch, products) {
        return products.filter(product => {
            const regex = new RegExp(wordToMatch, 'gi');
            return product.name.match(regex) || product.category.match(regex);
        });
    };

    function displayMatches() {
        console.log(searchItem);
        const matchArray = findMatches(searchItem, allProducts);
        console.log('matched array', matchArray);
        setSuggestedItems(matchArray);
    };
    console.log('suggested items',suggestedItems);
    console.log('typing status: ', isTyping);
    let trimmedMatchArray = [...suggestedItems];
    if (trimmedMatchArray.length > 3) {
        trimmedMatchArray = trimmedMatchArray.slice(0, 3);
    }
    console.log('trimmed array =>>>', trimmedMatchArray);

    function handleSearchedItemClicked() {
        console.log('you clicked on an item');
        setSearchItem('');
    };

    useEffect(() => {
        const searchPage = document.querySelector('.search-page');
        const cancelButton = document.querySelector('.cancel-button');

        cancelButton.addEventListener('click', () => {
            searchPage.setAttribute('closing', "");

            searchPage.addEventListener('animationend', () => {
                searchPage.removeAttribute('closing');
                handleSearchClicked();
            }, {once: true});
        });
    });

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
                        <button onClick={() => handleSearchClicked()} className='cancel-button'>Cancel</button>
                    </div>
                </div>
                <div className='search-content'>
                    <ul className="popular-items">
                        <p className='popular-heading'>{searchItem.length ? 'Suggested' : 'Popular'} items</p>
                        {isTyping ? 
                            trimmedMatchArray.map(item => {
                                const regex = new RegExp(searchItem, 'gi');
                                const newName = item.name.slice();
                                const matchedWords = newName.replace(regex, `<span class="matched">${searchItem}</span>`);
                                const newMatchedJSX = parse(matchedWords);
                                return (
                                    <Link key={item.id} className='links' to={`/shop/${item.id}`}>
                                        <li onClick={() => handleSearchClicked()} className='popular-item'>{newMatchedJSX}</li>
                                    </Link>
                                );
                            }) : 
                            popularItems.map(item => {
                                return (
                                    <Link key={item.id} className='links' to={`/shop/${item.id}`}>
                                        <li onClick={() => handleSearchClicked()} className='popular-item'>{item.name}</li>
                                    </Link>
                                );
                            }) 
                        }
                    </ul>
                    <div className='all-searched-cards'>
                        {searchItem.length > 0 && 
                            suggestedItems.map(item => {
                                return (
                                    <Link 
                                        key={item.id} 
                                        className='links' 
                                        to={`/shop/${item.id}`}
                                        onClick={handleSearchedItemClicked}
                                    >
                                        <div className='searched-card'>
                                            <div className='searched-image-container'>
                                                <img className='searched-image' src={item.imgURL} alt='product'/>
                                            </div>
                                            <div className='searched-card__info'>
                                                <div className='searched-card__name'>{item.name}</div>
                                                <div className='searched-card__category'>{item.category}</div>
                                                <div className='searched-card__price'>${item.price}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default SearchPage;
