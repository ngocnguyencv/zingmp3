import appReducers from './appReducers';
import { combineReducers, Reducer } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import musicReducer from './musicReducers';

interface AppState {
  app: any;
  music: any;
}

const commonConfig: PersistConfig<any> = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
  key: ''
};
const musicConfig: PersistConfig<any> = {
  ...commonConfig,
  key: 'music',
  whitelist: ['curSongId'],
};
const rootReducers: Reducer<AppState> = combineReducers({
  app: appReducers,
  music: persistReducer(musicConfig, musicReducer),
});

export default rootReducers;