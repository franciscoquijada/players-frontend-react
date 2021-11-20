import React, {useState} from 'react';
import '../styles/Card.css';
import {Input} from "@material-ui/core";

export const SearchInput = ({setSearchPlayers}) => {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        setSearchPlayers(searchValue);
    }

    return (
        <Input icon='search'
               placeholder='Search player...'
               onChange={(e) => searchItems(e.target.value)}
        />
    );
};



