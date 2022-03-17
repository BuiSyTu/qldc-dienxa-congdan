import authReducer from './Slices/AuthSlice';
import { configureStore } from '@reduxjs/toolkit';
import informationReducer from './Slices/InformationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    information: informationReducer,
  }
})