import React from 'react';
import Button from 'react-bootstrap/Button'

function SearchHeader() {
    return (
        <div className="search-header">
            <div className="search-button">
                <Button variant="primary">Search</Button>
            </div>
            <div className="search-form">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="name"
                />
            </div>
        </div>
    );
}

export default SearchHeader;