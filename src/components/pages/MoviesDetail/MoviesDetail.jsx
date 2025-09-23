import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  useGetMovieIdQuery,
  useGetSequelsandPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi';

const MoviesDetail = () => {
  const { id } = useParams();
  const respomseMovie = useGetMovieIdQuery(id);
  const respomseSequelsAndPrquels = useGetSequelsandPrequelsQuery(id);
  const respomseStaff = useGetStaffQuery(id);

  if (
    respomseMovie.isLoading ||
    respomseSequelsAndPrquels.isLoading ||
    respomseStaff.isLoading
  )
    return <h1>Loading...</h1>;

  if (
    respomseMovie.error ||
    respomseSequelsAndPrquels.error ||
    respomseStaff.error
  )
    return <h1>Error...</h1>;

  return (
    <Box m={3}>
      <Box display="flex" alignItems="center" gap={3}>
        <Button startIcon={<ArrowBack />} />
        <Typography variant="h4">
          {respomseMovie.data.nameRu}/{respomseMovie.data.nameOriginal}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={4}>
          <img
            src={respomseMovie.data.posterUrl}
            alt={respomseMovie.data.nameRu}
            width="100%"
          />
        </Grid>
        <Grid size={6} alignItems="center" justifyContent="space-between">
          <Grid size={4}>
            <List>
              <ListItem>
                <Typography>Год</Typography>
              </ListItem>
              <ListItem>
                <Typography>Страна</Typography>
              </ListItem>
              <ListItem>
                <Typography>Жанр</Typography>
              </ListItem>
              <ListItem>
                <Typography>Продолжительность</Typography>
              </ListItem>
              <ListItem>
                <Typography>Режисер</Typography>
              </ListItem>
              <ListItem>
                <Typography>Год</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid size={2}>
            <List>
              <ListItem>
                <Typography>{respomseMovie.data.year}</Typography>
              </ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid size={2}>3</Grid>
      </Grid>
    </Box>
  );
};

export default MoviesDetail;
