import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './reducers/itemsSlice';
import configsSlice from './reducers/configsSlice';

export const createStore = (initialStore = {}) =>
  configureStore({
    reducer: {
      items: itemsSlice,
      configs: configsSlice,
    },
    preloadedState: initialStore,
  });
