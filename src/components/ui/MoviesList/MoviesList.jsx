import { Pagination, Stack } from '@mui/material';

import MoviesCard from '../MoviesCard';

const MoviesList = ({ movies, totalPages, page, setPage }) => {
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        p={3}
      >
        {movies.map(movie => (
          <MoviesCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center" p={3}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="primary"
          size="large"
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
};

export default MoviesList;
