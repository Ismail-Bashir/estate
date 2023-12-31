import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddlewar) => getDefaultMiddlewar({serializableCheck: false,}),

});

export const persistor = persistStore(store);
