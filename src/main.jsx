import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa el Provider de react-redux
import './index.scss';
import App from './App.jsx';
import store from './reducers/store'; // Asegúrate de que la ruta del store esté correcta

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
