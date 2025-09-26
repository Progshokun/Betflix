import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

const MovieSkeleton = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box mt={2} mb={2}>
      {new Array(5).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height="30px"
            width="200px"
            sx={{ borderRadius: 2 }}
          />
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Skeleton
              key={index}
              animation="wave"
              variant="rectangular"
              height={isMobile ? '300px' : '352px'}
              width="100%"
              sx={{ marginBlock: 1, borderRadius: 2 }}
            />
          </Stack>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default MovieSkeleton;
