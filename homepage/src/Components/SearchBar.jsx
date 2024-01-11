import React from 'react';
import {CiSearch} from "react-icons/ci";
const SearchBar = () => {
    return(
        <form action="http://google.com/search" target="-blank" className='Search'>
            <input name="q" className="SearchBar"/>
            <button type="submit" className='SearchButton'><CiSearch/></button>
        </form>
    )
}

export default SearchBar