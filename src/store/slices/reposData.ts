import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesResponse } from 'src/models/repos'; // Импортируем тип SearchRepositoriesResponse из модели репозиториев
import { RootState } from 'src/store/store'; // Импортируем тип RootState для доступа к состоянию Redux store

// Определяем начальное состояние для слайса
const initialState: SearchRepositoriesResponse = {
	total_count: 0, // Общее количество репозиториев
	incomplete_results: false, // Флаг, указывающий, были ли получены все результаты поиска
	items: [], // Массив объектов Repository
};

// Создаем слайс с помощью createSlice
const reposDataSlice = createSlice({
	name: 'reposDataSlice', // Имя слайса
	initialState, // Начальное состояние
	reducers: {
		// Редьюсер для обновления данных репозиториев
		setReposData: (state, action: PayloadAction<SearchRepositoriesResponse>) => {
			// Обновляем состояние слайса с данными, полученными из action
			state.total_count = action.payload.total_count;
			state.incomplete_results = action.payload.incomplete_results;
			state.items = action.payload.items;
		},
	},
});

// Селектор для получения данных репозиториев из состояния Redux store
export const repDataSelector = () => (state: RootState) => state.reposData;

// Экспортируем action для обновления данных репозиториев
export const { setReposData } = reposDataSlice.actions;

// Экспортируем редьюсер слайса
export default reposDataSlice.reducer;

// Экспортируем слайс для возможного использования в других частях приложения
export { reposDataSlice };
