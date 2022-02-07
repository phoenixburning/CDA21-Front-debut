import React from 'react'

import './search-box2.css'

const SearchBox2 = props => (
    <input 
        className="search-box2"
        type="search"
        placeholder={props.message}
        onChange={props.onSearch2}
    />
)

export default SearchBox2