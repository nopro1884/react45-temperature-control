import { configureStore } from '@reduxjs/toolkit'
import temperatureReducer from './../pages/temperatureSlice';

export default configureStore({
  reducer: {
    temperature: temperatureReducer
  },
});