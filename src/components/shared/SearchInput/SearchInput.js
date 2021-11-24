import React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import '../../players/Card/Card.css';
import PropTypes from 'prop-types';

export const SearchInput = ({ setSearchPlayers, labelText, searchPlayers }) => {
  const searchItems = (searchValue) => {
    const regValidateOnlyLettersNumbers = /^[a-z0-9\u00f1\u00d1 _]+$/i;
    const isValid = regValidateOnlyLettersNumbers.test(searchValue);
    if (isValid || searchValue === '') {
      setSearchPlayers(searchValue);
    }
  };

  return (
    <TextField
      value={searchPlayers}
      label={labelText}
      type="search"
      variant="outlined"
      onChange={(e) => searchItems(e.target.value)}
      InputProps={{
        inputProps: {
          'data-testid': 'search'
        },
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

SearchInput.propTypes = {
  setSearchPlayers: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  searchPlayers: PropTypes.string.isRequired
};
