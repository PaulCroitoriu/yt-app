import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
    const [input, setInput] = useState('');

    const onInputChange = (event) => {
        setInput(event.target.value)
    };

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(input);
    };


    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label className="label">Search Videos</label>
                    <input 
                        value={input}
                        type="text"
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchBar;