import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import '../../players/Card/Card.css';

export const SearchInput = ({setSearchPlayers, labelText, searchPlayers}) => {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = searchValue => {
        const regValidateOnlyLettersNumbers = /^(?:[A-Za-z\u00f1\u00d1]+|\d+)$/;
        const isValid = regValidateOnlyLettersNumbers.test(searchValue);
        if (isValid || searchValue === '') {
            setSearchInput(searchValue);
            setSearchPlayers(searchValue);
        }

    }

    return (
        <TextField
            value={searchPlayers}
            label={labelText}
            type='search'
            variant='outlined'
            onChange={(e) => searchItems(e.target.value)}
            InputProps={{
                            inputProps: {
                                'data-testid': 'search'
                            },
                            endAdornment: <InputAdornment position='start'>
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                       }}
        />
    );
};



