import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchRepositoriesRequest, SearchRepositoriesResponse } from 'src/models/repos';

// Создаем API с помощью RTK Query
const githubApi = createApi({
	// Устанавливаем имя reducer'а
	reducerPath: 'githubApi',
	// Время, в течение которого сохранять неиспользуемые данные в кэше (в секундах)
	keepUnusedDataFor: 60,
	// Автоматически перечитывать данные при монтировании компонента или изменении аргументов запроса
	refetchOnMountOrArgChange: true,
	// Устанавливаем базовый URL для API
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	// Определяем endpoints API
	endpoints: (builder) => ({
		// Мутация для получения репозиториев по запросу
		getRepositories: builder.mutation<SearchRepositoriesResponse, SearchRepositoriesRequest>({
			// Строим URL запроса
			query: ({ query, page, per_page }) => ({
				url: '/search/repositories', // URL запроса
				params: {
					q: query, // Поисковый запрос
					page, // Номер страницы
					per_page, // Количество результатов на странице
				},
			}),
		}),
	}),
});

// Экспортируем хук для использования мутации
export const { useGetRepositoriesMutation } = githubApi;

// Экспортируем объект API
export default githubApi;
