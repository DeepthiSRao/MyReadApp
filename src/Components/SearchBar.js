import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, onReset }) => {
    const [term, setTerm] = useState("");

    const delayedQuery = React.useRef(_.debounce(q => onSearch(q), 200)).current;

    const handleChange = e => {
        const { value } = e.target;
        setTerm(value);
        delayedQuery(value);
    }
    
    return (
            <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" onClick={onReset}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        autoFocus
                        value={term}
                        onChange={handleChange} />
                </div>
            </div>
        );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    onReset: PropTypes.func,
}

export default SearchBar;
