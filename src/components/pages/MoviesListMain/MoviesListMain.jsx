import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { MOVIE_LISTS } from '../../../constants';
import {
  useGetGenreAndCountryQuery,
  useGetMovieQuery,
} from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';
import MoviesList from '../../ui/MoviesList';
import SelectMovies from '../../ui/SelectMovies/SelectMovies';
import MoviesListMainSkeleton from './MoviesListMainSkeleton';

const MoviesListMain = () => {
  const { countries, genreId, order, year } = useSelector(
    state => state.currentQuery,
  );
  const location = useLocation();
  const [page, setPage] = useState(1);
  const movieType = MOVIE_LISTS.find(item => item.url === location.pathname);
  const navigate = useNavigate();
  const cartoon = movieType.url === '/cartoons' ? 18 : genreId;

  const responceFilms = useGetMovieQuery({
    countries,
    genreId: cartoon,
    order: 'NUM_VOTE',
    type: movieType.value,
    year,
    page,
  });

  const responseGetGenreAndCountry = useGetGenreAndCountryQuery();

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (responceFilms.error || responseGetGenreAndCountry.error)
    return <ErrorMessage />;
  if (responceFilms.isLoading || responseGetGenreAndCountry.isLoading)
    return <MoviesListMainSkeleton data="data" />;

  return (
    <>
      <Stack flexDirection="row" gap={5} p={3}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {movieType.title}
        </Typography>
      </Stack>
      <SelectMovies
        countriesList={responseGetGenreAndCountry.data.countries}
        genresList={responseGetGenreAndCountry.data.genres}
        countries={countries}
        genreId={genreId}
        year={year}
        order={order}
      />
      <MoviesList
        movies={responceFilms.data.items}
        totalPages={responceFilms.data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default MoviesListMain;
