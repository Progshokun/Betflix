import { Box, Link, Rating, Stack, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { ColorModeContext } from '../../../context/ToogleColorMode';
import styles from './MoviesCard.module.css';

const MoviesCard = ({ movie }) => {
  const { mode } = useContext(ColorModeContext);

  return (
    <>
      <Stack alignItems="center">
        <RouterLink
          to={
            movie.kinopoiskId
              ? `/movie/${movie.kinopoiskId}`
              : `/movie/${movie.filmId}`
          }
          style={{ textDecoration: 'none' }}
        >
          <img
            src={movie.posterUrlPreview}
            alt={movie.nameRu}
            className={styles.img}
          />
          <Typography
            variant="h6"
            textAlign="center"
            color={mode === 'light' ? 'black' : 'white'}
            mt={1}
            sx={{ width: 200 }}
          >
            {movie.nameRu ? movie.nameRu : movie.nameEn}
          </Typography>
          {movie.ratingKinopoisk && (
            <Stack alignItems="center">
              <Tooltip title={`${movie.ratingKinopoisk} / 10`} arrow>
                <Box>
                  <Rating
                    name="read-only "
                    precision={0.2}
                    defaultValue={movie.ratingKinopoisk / 2}
                    size="small"
                    readOnly
                  />
                </Box>
              </Tooltip>
            </Stack>
          )}
        </RouterLink>
      </Stack>
    </>
  );
};

export default MoviesCard;
