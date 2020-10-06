import React from 'react';
import PropTypes from 'prop-types';

const BookShelfHandler = (props) => {
    const handleInputChange = (e) => {
        props.selectHandler(props.book, e.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select value={props.shelf} onChange={handleInputChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

BookShelfHandler.propTypes = {
    book: PropTypes.object.isRequired,
    selectHandler: PropTypes.func,
    shelf: PropTypes.string.isRequired,
}

export default BookShelfHandler;