import React from 'react';
import BookShelfHandler from './BookShelfHandler';
import PropTypes from 'prop-types';

const Book = ({ book, shelf, selectHandler }) => {
    const { title, authors, imageLinks } = book;

    return (
        <React.Fragment>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${
                                    imageLinks ?
                                        imageLinks.thumbnail
                                        : "No book cover availabel"})`
                                    }}>
                        </div>
                        <BookShelfHandler
                            book={book}
                            shelf={shelf}
                            selectHandler={selectHandler} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors ? authors.join(', ') : "Unknown author"}</div>
                </div>
             </li>
        </React.Fragment>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    selectHandler: PropTypes.func,
    shelves: PropTypes.array,
}

export default Book;