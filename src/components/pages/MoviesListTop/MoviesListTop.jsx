import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_LISTS } from '../../../constants';
import { useGetMovieTopQuery } from '../../../services/kinopoiskApi';
import MoviesList from '../../ui/MoviesList';

const MoviesListTop = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const movieType = TOP_LISTS.find(item => item.url === location.pathname);
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetMovieTopQuery({
    type: movieType.value,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Stack flexDirection="row" gap={5} p={3}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {movieType.title}
        </Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default MoviesListTop;
