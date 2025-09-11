import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

import Footer from './ui/Footer';
import Header from './ui/Header';

const Layout = () => {
  return (
    <Container fixed>
      <Box sx={{ p: 4 }} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
