import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Asegúrate de la ruta correcta

const store = configureStore({
  reducer: {
    tasks: tasksReducer, 
  },
});

export default store;
