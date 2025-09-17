import { useSelector } from 'react-redux';

import { TOP_LISTS } from '../constants';
import {
  useGetMovieQuery,
  useGetMovieTopQuery,
} from '../services/kinopoiskApi';

const useMovieQuery = () => {
  const { countries, order, year, page } = useSelector(
    state => state.currentQuery,
  );

  const responcePopular = useGetMovieTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });

  const responceBest = useGetMovieTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });

  const responceMovie = useGetMovieQuery({
    type: 'FILM',
    countries,
    genreId: '1',
    order,
    year,
    page,
  });

  const responceSeries = useGetMovieQuery({
    type: 'TV_SERIES',
    countries,
    genreId: '1',
    order,
    year,
    page,
  });

  const responceCartoon = useGetMovieQuery({
    type: 'FILM',
    genreId: 18,
    countries,
    order,
    year,
    page,
  });

  const isLoading =
    responcePopular.isFetching ||
    responceBest.isFetching ||
    responceMovie.isFetching ||
    responceSeries.isFetching ||
    responceCartoon.isFetching;

  const hasError =
    responcePopular.error ||
    responceBest.error ||
    responceMovie.error ||
    responceSeries.error ||
    responceCartoon.error;

  return {
    isLoading,
    hasError,
    responcePopular,
    responceBest,
    responceMovie,
    responceSeries,
    responceCartoon,
  };
};

export default useMovieQuery;
