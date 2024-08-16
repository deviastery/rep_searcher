import { configureStore } from '@reduxjs/toolkit';
import githubApi from 'src/api/githubApi';
import reposDataReducer from './slices/reposData';
import searchRepoRequestReducer from './slices/searchRepoRequest';

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		reposData: reposDataReducer,
		searchRepoRequest: searchRepoRequestReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
