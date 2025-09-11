import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../constants';
import Layout from './Layout';
import ActorsPage from './pages/ActorsDetail';
import Movies from './pages/Movies';
import MoviesDetail from './pages/MoviesDetail';
import MoviesList from './pages/MoviesList';
import MoviesListTop from './pages/MoviesListTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />, // Home page
      },
      ...TOP_LISTS.map(({ url }) => ({
        path: url,
        element: <MoviesListTop />,
      })),
      ...MOVIE_LISTS.map(({ url }) => ({
        path: url,
        element: <MoviesList />,
      })),
      {
        path: '/movies/:id',
        element: <MoviesDetail />, // Home page
      },
      {
        path: '/actors/:id',
        element: <ActorsPage />, // Home page
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
