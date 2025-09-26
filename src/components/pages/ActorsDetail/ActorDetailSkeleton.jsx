import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  useMediaQuery,
} from '@mui/material';

const ActorDetailSkeleton = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Stack m={2} gap={1}>
      <Grid container>
        <Grid size={{ md: 5, xs: 8 }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={isMobile ? '72px' : '46px'}
            width="100%"
            sx={{ borderRadius: 2 }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={12}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={isMobile ? '570px' : '408px'}
            width="100%"
            sx={{ borderRadius: 2 }}
          />
        </Grid>
      </Grid>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={isMobile ? 0 : '32px'}
        width={170}
        sx={{ borderRadius: 2, alignSelf: 'center' }}
      />
      <Grid container>
        <Grid size={12}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height="800px"
            width="100%"
            sx={{ borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ActorDetailSkeleton;
