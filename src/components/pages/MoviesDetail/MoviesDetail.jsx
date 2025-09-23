import { ArrowBack, ListAlt } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import {
  useGetMovieIdQuery,
  useGetSequelsandPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi';
import MoviesCard from '../../ui/MoviesCard';

const MoviesDetail = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { id } = useParams();
  const respomseMovie = useGetMovieIdQuery(id);
  const respomseSequelsAndPrquels = useGetSequelsandPrequelsQuery(id);
  const respomseStaff = useGetStaffQuery(id);
  const navigate = useNavigate();

  const direcors = respomseStaff?.data?.filter(
    el => el.professionKey === 'DIRECTOR',
  );
  const actors = respomseStaff?.data?.filter(
    el => el.professionKey === 'ACTOR',
  );

  // console.log(respomseMovie.data);

  if (
    respomseMovie.isLoading ||
    respomseSequelsAndPrquels.isLoading ||
    respomseStaff.isLoading
  )
    return <h1>Loading...</h1>;

  if (respomseMovie.error || respomseStaff.error) return <h1>Error...</h1>;

  return (
    <Box m={3}>
      <Box display="flex" alignItems="center">
        <Button
          sx={{ width: '41px' }}
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h2" gutterBottom sx={{ fontSize: '30px' }}>
          {respomseMovie.data.nameOriginal
            ? `${respomseMovie.data.nameRu}/${respomseMovie.data.nameOriginal}`
            : respomseMovie.data.nameRu}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ sm: 12, md: 4 }}>
          <img
            src={respomseMovie.data.posterUrl}
            alt={respomseMovie.data.nameRu}
            width="100%"
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Год</Typography>
            </Grid>
            <Grid size={4}>
              <Typography>{respomseMovie.data.year}</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Страна</Typography>
            </Grid>
            <Grid size={4}>
              {respomseMovie?.data?.countries.map(item => (
                <Typography key={item.country}>{item.country}</Typography>
              ))}
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Жанр</Typography>
            </Grid>
            <Grid size={4}>
              {respomseMovie?.data?.genres.map(item => (
                <Typography key={item.genre}>
                  {item.genre}
                  <br />
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Продолжительность</Typography>
            </Grid>
            <Grid size={4}>
              <Typography>{respomseMovie.data.filmLength} минут</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Кинопоиск</Typography>
            </Grid>
            <Grid size={4}>
              <Typography>
                {respomseMovie.data.ratingKinopoisk ? (
                  <Typography>
                    {respomseMovie.data.ratingKinopoisk} / 10
                  </Typography>
                ) : (
                  <Typography>Нет оценок</Typography>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>IMDB</Typography>
            </Grid>
            <Grid size={4}>
              <Typography>
                {respomseMovie.data.ratingImdb ? (
                  <Typography>{respomseMovie.data.ratingImdb} / 10</Typography>
                ) : (
                  <Typography>Нет оценок</Typography>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={2}>
              <Typography gutterBottom>Режисер</Typography>
            </Grid>
            <Grid size={4}>
              {direcors.map(director => (
                <Typography key={director.staffId}>
                  {director.nameRu}
                  <br />
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={12}>
              <Typography gutterBottom>Описание</Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="p">
                {respomseMovie.data.description
                  ? respomseMovie.data.description
                  : 'Описание отсутсивует'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ sm: 12, md: 2 }} textAlign={{ sm: 'center', md: 'left' }}>
          <Typography gutterBottom>В главных ролях</Typography>
          {actors
            .map(actor => (
              <Link component={RouterLink} to={`actor/${actor.staffId}`}>
                <Typography gutterBottom>{actor.nameRu} </Typography>
              </Link>
            ))
            .slice(0, 10)}
        </Grid>
        <Grid size={12} justifyContent="center">
          Player
        </Grid>
      </Grid>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Сиквелы и приквелы
      </Typography>
      <Stack justifyContent="center" direction="row" gap={2} flexWrap="wrap">
        {respomseSequelsAndPrquels.data ? (
          respomseSequelsAndPrquels.data.map(item => (
            <MoviesCard key={item.id} movie={item} />
          ))
        ) : (
          <Typography fontSize={30}>Нет сиквелов или привелов</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default MoviesDetail;
