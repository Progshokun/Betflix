import { Box, Typography } from '@mui/material';

const ErrorMessage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="25vh"
    >
      <Typography variant="h6">
        Произошла ошибка - попробуйте обновить страницу
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
