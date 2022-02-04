import React from 'react';

const Search = (props) => {

    const onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();

        props.onSearch(query);

    }

    return (
        <input type="text" onChange={onChangeEvent}/>
    );
}

export default Search;
