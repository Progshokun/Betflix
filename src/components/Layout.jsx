import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './ui/Footer';
import Header from './ui/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
