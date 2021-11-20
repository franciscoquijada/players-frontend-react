import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import '../Card/Card.css';

export const SearchInput = ({setSearchPlayers}) => {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        setSearchPlayers(searchValue);
    }

    return (
            <TextField
                label='Search player'
                type='search'
                variant='outlined'
                onChange={(e) => searchItems(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='start'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
    );
};



