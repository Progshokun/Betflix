import '@acrool/react-carousel/dist/index.css';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store';
import App from './components/App';
import ToogleColorMode from './context/ToogleColorMode';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToogleColorMode>
      <CssBaseline />
      <App />
    </ToogleColorMode>
  </Provider>,
);
