import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />, // Home page
      },
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
