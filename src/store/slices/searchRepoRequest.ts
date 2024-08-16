import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesRequest } from 'src/models/repos'; // Импортируем тип SearchRepositoriesRequest из модели репозиториев
import { RootState } from 'src/store/store'; // Импортируем тип RootState для доступа к состоянию Redux store

// Определяем начальное состояние для слайса
const initialState: SearchRepositoriesRequest = {
	query: '', // Поисковый запрос
	per_page: 7, // Количество результатов на странице
	page: 1, // Номер страницы
};

// Создаем слайс с помощью createSlice
const searchRepoRequestSlice = createSlice({
	name: 'searchRepoRequestSlice', // Имя слайса
	initialState, // Начальное состояние
	reducers: {
		// Редьюсер для обновления запроса на поиск
		setSearchRepoRequest: (state, action: PayloadAction<SearchRepositoriesRequest>) => {
			// Обновляем состояние слайса с данными, полученными из action
			state.query = action.payload.query;
			state.per_page = action.payload.per_page;
			state.page = action.payload.page;
		},
	},
});

// Селектор для получения запроса на поиск из состояния Redux store
export const searchRepoRequestSelector = () => (state: RootState) => state.searchRepoRequest; // Имя селектора изменено на searchRepoRequestSelector для ясности

// Экспортируем action для обновления запроса на поиск
export const { setSearchRepoRequest } = searchRepoRequestSlice.actions;

// Экспортируем редьюсер слайса
export default searchRepoRequestSlice.reducer;

// Экспортируем слайс для возможного использования в других частях приложения
export { searchRepoRequestSlice };
