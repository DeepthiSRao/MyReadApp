import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = ({ shelf, bookList, selectHandler }) => {
    //filter the books by shelf category
    const filterBookByShelf = bookList.filter(book => book.shelf === shelf.category);

    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.label}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                filterBookByShelf.map(book =>
                                    <Book
                                        key={book.id}
                                        book={book}
                                        selectHandler={selectHandler}
                                        shelf={shelf.category} />
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    bookList: PropTypes.array.isRequired,
    selectHandler: PropTypes.func,
    shelves: PropTypes.array,
}

export default BookShelf;
