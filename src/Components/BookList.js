import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookList = ({ shelves, bookList, selectOptionHandler }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                    {
                        shelves.map(shelf => (
                            <BookShelf
                                key={shelf.id}
                                shelf={shelf}
                                bookList={bookList}
                                selectHandler={selectOptionHandler} />
                        ))
                    }
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>
                        Add a book
                    </button>
                </Link>
            </div>

        </div>
    );
}

BookList.propTypes = {
    bookList: PropTypes.array.isRequired,
    selectHandler: PropTypes.func,
    shelves: PropTypes.array,
}

export default BookList;