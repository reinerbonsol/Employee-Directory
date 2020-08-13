import React from 'react'
import SearchForm from "../SearchForm/index";

export default function Nav() {
    return (
        <div>
            <div className="navbar">
            <div className="employee-directory">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Employee Search: </div>
                <SearchForm />
            </div>
        </div>
        </div>
    )
}

