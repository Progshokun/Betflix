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
  MINI_SERIES: 'Мини-сериал',
  TV_SHOW: 'ТВ-Шоу',
};

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    state => state.searchQuery,
  );
  const { data, isLoading } = useGetMovieQuery(
    { countries, genreId, order, type, year, page, keyword },
    { skip: !keyword }, // не делаем запрос, если keyword пустой
  );
  const navigate = useNavigate();

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input ?? '' }));
    }, 500);

    return () => clearTimeout(setTimeoutId);
  }, [input, dispatch]);

  return (
    <Autocomplete
      sx={{
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        height: 50,
        flexGrow: 1,
      }}
      freeSolo
      getOptionLabel={option =>
        `${option.nameRu} - ${option.year} - ${movieTypes[option.type] || ''}`
      }
      options={data ? data.items : []}
      onChange={(_, value) => {
        if (value) navigate(`movie/${value.kinopoiskId}`);
      }}
      onInputChange={(_, value) => {
        setInput(value ?? ''); // никогда не undefined
      }}
      renderInput={params => (
        <TextField
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          {...params}
          label="Поиск"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
