import { useGetMovieTopQuery } from '../../../services/kinopoiskApi';

const MoviesListTop = () => {
  const { data, error, isLoading } = useGetMovieTopQuery({
    type: 'TOP_POPULAR_ALL',
    page: 1,
  });

  console.log(data, error, isLoading);

  return <div>MoviesListTop</div>;
};

export default MoviesListTop;
