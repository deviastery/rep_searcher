import { configureStore } from '@reduxjs/toolkit';
import githubApi from 'src/api/githubApi'; // Импортируем API для работы с GitHub
import reposDataReducer from './slices/reposData'; // Импортируем редьюсер для данных репозиториев
import searchRepoRequestReducer from './slices/searchRepoRequest'; // Импортируем редьюсер для запросов на поиск репозиториев

// Создаем Redux store с помощью configureStore
export const store = configureStore({
	reducer: {
		// Добавляем редьюсеры для API и слайсов
		[githubApi.reducerPath]: githubApi.reducer, // Редьюсер для RTK Query (API)
		reposData: reposDataReducer, // Редьюсер для данных репозиториев
		searchRepoRequest: searchRepoRequestReducer, // Редьюсер для запросов на поиск репозиториев
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware), // Добавляем middleware для RTK Query
});

// Экспортируем store для использования в других файлах
export default store;

// Определяем тип RootState для доступа к состоянию Redux store
export type RootState = ReturnType<typeof store.getState>;

// Определяем тип AppDispatch для отправки действий в Redux store
export type AppDispatch = typeof store.dispatch;
