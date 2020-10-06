import React from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchBook = props => {
    const { searchBooks, myBooks, onSearch, selectOptionHandler, onReset } = props;

    const updatedBooks = searchBooks.map((searchBook) => {
        const commonBook = myBooks.find((book) => {
            return book.id === searchBook.id;
        });
        searchBook.shelf = commonBook ? commonBook.shelf : 'none';
        return searchBook;
    });

    return (
        <div className="search-books">
            <SearchBar
                onSearch={onSearch}
                onReset={onReset} />
            <SearchResult
                booksList={updatedBooks}
                selectHandler={selectOptionHandler} />
        </div>  
    );
}

SearchBook.propTypes = {
    myBooks: PropTypes.array.isRequired,
    searchBooks: PropTypes.array.isRequired,
    onSearch: PropTypes.func,
    selectOptionHandler: PropTypes.func,
    onReset: PropTypes.func,
}

export default SearchBook;