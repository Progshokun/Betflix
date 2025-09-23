import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { resetQuery, selectQuery } from '../../../feautures/currentQuerySlice';

const SelectMovies = ({
  countriesList,
  genresList,
  countries,
  genreId,
  year,
  order,
}) => {
  const dispatch = useDispatch();
  const orderList = [
    {
      title: 'По оценкам',
      value: 'NUM_VOTE',
    },
    {
      title: 'По рейтингу',
      value: 'RATING',
    },
    {
      title: 'По году',
      value: 'YEAR',
    },
  ];

  const yearList = new Array(60).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack
      sx={{
        flexDirection: { sm: 'column', md: 'row' },
        gap: 1,
        alignItems: 'center',
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select
          label="order"
          value={order}
          onChange={e => dispatch(selectQuery({ order: e.target.value }))}
        >
          {orderList.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select
          label="countrie"
          value={countries}
          onChange={e => dispatch(selectQuery({ countries: e.target.value }))}
        >
          {countriesList.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select
          label="genre"
          value={genreId}
          onChange={e => dispatch(selectQuery({ genreId: e.target.value }))}
        >
          {genresList.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select
          label="year"
          value={year}
          onChange={e => dispatch(selectQuery({ year: e.target.value }))}
        >
          {yearList.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button
          variant="outlined"
          startIcon={<Close />}
          onClick={() => dispatch(resetQuery())}
        >
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
};

export default SelectMovies;
