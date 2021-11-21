import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import '../../players/Card/Card.css';

export const SearchInput = ({setSearchPlayers, labelText}) => {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        setSearchPlayers(searchValue);
    }

    return (
            <TextField
                label={labelText}
                type='search'
                variant='outlined'
                onChange={(e) => searchItems(e.target.value)}
                InputProps={{
                    'data-testid': 'search',
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



