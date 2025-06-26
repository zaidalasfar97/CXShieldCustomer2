import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import * as _ from 'lodash';
import logger from 'redux-logger';
import {batchedSubscribe} from 'redux-batched-subscribe';
import {persistReducer, persistStore} from 'redux-persist';
import {Action, combineReducers} from 'redux';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import {api} from './RTK';
import reducers from './reducers';
import {useDispatch} from 'react-redux';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['UserSettings', 'SettingsApi'],
};
export const reducer = combineReducers({
  ...reducers,
  [api.reducerPath]: api.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const debounceNotify = _.debounce(notify => notify());
const store = configureStore({
  devTools: __DEV__,
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(api.middleware), // NOTE this addition
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(logger)
      .concat(api.middleware),
  reducer: persistedReducer,
  enhancers: [batchedSubscribe(debounceNotify)],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch); // NOTE this addition
export default store;
export type RootState = ReturnType<typeof persistedReducer>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<ThunkAppDispatch>();
