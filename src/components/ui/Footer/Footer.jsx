import { Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        display: 'flex',
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography sx={{ color: 'gray' }} variant="body2">
        &copy; {new Date().getFullYear()} &laquo;Betflix&raquo;18+
        <br />
        Данный сайт создан в обучающих целях и не является коммерческим
        проектом. <br />
        Все материалы взяты из открытых источников и принадлежат их
        правообладателям.
        <br />
        Использование материалов сайта возможно только с письменного согласия
        правообладателей.
      </Typography>
      <Typography
        component={RouterLink}
        to="/"
        sx={{
          textDecoration: 'none',
          color: '#1976D2',
          fontWeight: 'bold',
          marginLeft: 2,
          p: 4,
        }}
        variant="h5"
      >
        Betflix
      </Typography>
    </Stack>
  );
};

export default Footer;
