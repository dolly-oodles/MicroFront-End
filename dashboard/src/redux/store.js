import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/statsDataReducer';

const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
    
  },
});

export default store;
