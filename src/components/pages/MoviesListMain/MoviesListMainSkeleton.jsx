import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

const MoviesListMainSkeleton = () => {
  const isDesktop = useMediaQuery('(max-width:1199px)');
  const isTablet = useMediaQuery('(max-width:899px)');
  const isMobile = useMediaQuery('(max-width:525px)');
  let count = isDesktop ? 3 : 4;

  return (
    <Box mt={2} mb={2}>
      <React.Fragment>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height="30px"
          width="250px"
          sx={{ borderRadius: '3px', marginBottom: '24px' }}
        />
        <Stack
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          {new Array(4).fill(null).map((_, index) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="rectangular"
              mt={2}
              height={39}
              width={isTablet ? '100%' : 250}
              sx={{ borderRadius: '3px' }}
            />
          ))}
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={39}
            width={136}
            sx={{ borderRadius: '3px' }}
          />
        </Stack>

        {new Array(4).fill(null).map((_, index) => (
          <Stack
            direction="row"
            key={index}
            gap={3}
            p={3}
            justifyContent={'center'}
          >
            {new Array(count).fill(null).map((_, index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                height={isMobile ? '300px' : '352px'}
                width={isMobile ? '100%' : '215px'}
                sx={{ marginBlock: '6px', borderRadius: '4px' }}
              />
            ))}
          </Stack>
        ))}
      </React.Fragment>
    </Box>
  );
};

export default MoviesListMainSkeleton;
