import React from 'react'

const Search = (props) => (
    <input 
        onChange={props.onSearchPhraseChanged}
        value={props.searchPhrase}
        placeholder={'Find user'}
    />

)



export default Search