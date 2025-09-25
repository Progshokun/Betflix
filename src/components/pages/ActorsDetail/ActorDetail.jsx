import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetStaffIdQuery } from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';

const ActorDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetStaffIdQuery(id);
  const navigate = useNavigate();

  console.log(data);
  // console.log(data.profession);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <ErrorMessage />;

  return (
    <Box m={2}>
      <Box display="flex" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h2" gutterBottom sx={{ fontSize: '30px' }}>
          {data.nameRu} / {data.nameEn}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ sm: 12, md: 4 }}>
          <img src={data.posterUrl} alt={data.nameRu} width="100%" />
        </Grid>
        <Grid size={{ sm: 12, md: 8 }}>
          <Grid container justifyContent="space-between">
            <Grid size={3}>
              <Typography>Место рождения</Typography>
            </Grid>
            <Grid size={5}>
              <Typography>{data.birthplace}</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={3} gutterBottom>
              <Typography>Год рождения</Typography>
            </Grid>
            <Grid size={5}>
              <Typography>{data.birthday}</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={3}>
              <Typography>Возраст</Typography>
            </Grid>
            <Grid size={5}>
              <Typography>{data.age} лет</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={3} gutterBottom>
              <Typography>Рост</Typography>
            </Grid>
            <Grid size={5}>
              <Typography>{data.growth} см</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={3}>
              <Typography>Профессия</Typography>
            </Grid>
            <Grid size={5}>
              <Typography>{data.profession}</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid size={12}>
              <Typography>Интересные факты</Typography>
            </Grid>
            <Grid size={12}>
              {data.facts ? (
                data.facts.map(fact => (
                  <Typography component="p">{fact}</Typography>
                ))
              ) : (
                <Typography component="p">Нет интересных фактов</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        component="h3"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: 600, fontSize: 25, marginTop: 5 }}
      >
        Фильмы
      </Typography>
      {data.films
        ? data.films
            .filter(
              (film, index, self) =>
                index === self.findIndex(f => f.filmId === film.filmId),
            )
            .map((film, index) => (
              <Grid container spacing={1} justifyContent="center">
                <Grid size={1}>{index + 1}</Grid>
                <Grid size={10}>
                  <Typography>
                    <Link
                      component={RouterLink}
                      to={`/movie/${film.filmId}`}
                      sx={{ textDecoration: 'none' }}
                    >
                      {film.nameRu || film.nameEn}
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={1}>
                  {film.rating ? film.rating : <Typography>-</Typography>}
                </Grid>
              </Grid>
            ))
        : []}
    </Box>
  );
};

export default ActorDetail;
