import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';

const MoviesListTopSkeleton = () => {
  const isLaptop = useMediaQuery('(max-width:1200px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const isMobile = useMediaQuery('(max-width:525px)');
  let count = 4;

  if (isLaptop) {
    count = 3;
  }

  if (isTablet) {
    count = 2;
  }

  if (isMobile) {
    count = 1;
  }

  return (
    <Box p={3}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={isMobile ? '100%' : '350px'}
        height={isMobile ? '72px' : '46px'}
        sx={{ borderRadius: 2 }}
      />
      {new Array(3).fill(null).map((_, index) => (
        <Stack gap={5} p={3} flexDirection="row" justifyContent="center">
          {new Array(count).fill(null).map((_, index) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="rectangular"
              width="215px"
              height="390px"
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Stack>
      ))}
    </Box>
  );
};

export default MoviesListTopSkeleton;
