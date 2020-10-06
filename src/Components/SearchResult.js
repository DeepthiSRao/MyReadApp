import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const SearchResult = (props) => {
    const { booksList, selectHandler } = props;

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {booksList && booksList.map((book) => (
                       <Book
                            key={book.id}
                            book={book}
                            shelf={book.shelf ? book.shelf : 'none'}
                            selectHandler={selectHandler}
                        />
                    ))
                }
            </ol>
        </div>
    );
}

SearchResult.propTypes = {
    booksList: PropTypes.array.isRequired,
    selectHandler: PropTypes.func,
}

export default SearchResult;