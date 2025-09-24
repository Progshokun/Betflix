import { CircularProgress, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchQuery } from '../../../feautures/searchQuerySlice';
import { useGetMovieQuery } from '../../../services/kinopoiskApi';

const movieTypes = {
  FILM: 'Фильм',
  TV_SERIES: 'Сериал',
  MINI_SERIES: 'Мни-сериал',
  TV_SHOW: 'ТВ-Шоу',
};

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    state => state.searchQuery,
  );
  const { data, isLoading } = useGetMovieQuery({
    countries,
    genreId,
    order,
    type,
    year,
    page,
    keyword,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);
    return clearTimeout(setTimeoutId);
  }, [input]);

  return (
    <Autocomplete
      sx={{
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        borderRadius: 4,
        '&.MuiOutlinedInput-root': {
          '&fieldset': { border: 'none' },
        },
      }}
      freeSolo
      getOptionLabel={option =>
        `${option.nameRu} - ${option.year} - ${movieTypes[option.type]}`
      }
      options={data ? data.items : []}
      onChange={(_, value) => {
        navigate(`movie/${value.kinopoiskId}`);
      }}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="Поиск"
          inputProps={{
            ...params.inputProps,
            endAdorment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
