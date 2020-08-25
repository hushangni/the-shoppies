import React from 'react';

function SearchBar({userInput, handleOnChange}) {
    return (
        <section>
            <h2>Search Bar</h2>
            <input 
                type="search" 
                placeholder="Harry Potter" 
                value={userInput}
                onChange={handleOnChange} 
            />
        </section>
    )
}

export default SearchBar;