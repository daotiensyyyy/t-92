import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage';
import productReducer from '../features/Products/productSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'details', 'events'],
}

const reducers = combineReducers({
  products: productReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);