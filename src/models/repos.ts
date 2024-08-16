type Repository = {
	id: number; // Идентификатор репозитория
	name: string; // Краткое имя репозитория
	full_name: string; // Полное имя репозитория (владелец/имя)
	description: string | null; // Описание репозитория
	topics: string[]; // Список тем, связанных с репозиторием
	html_url: string; // URL страницы репозитория на GitHub
	language: string | null; // Язык программирования, используемый в репозитории
	forks_count: number; // Количество форков репозитория
	stargazers_count: number; // Количество звезд репозитория
	updated_at: string; // Дата последнего обновления репозитория
	license: {
		name: string | null; // Название лицензии репозитория
	} | null;
};

type SearchRepositoriesResponse = {
	total_count: number; // Общее количество репозиториев, соответствующих запросу
	incomplete_results: boolean; // Флаг, указывающий, были ли получены все результаты поиска
	items: Repository[]; // Массив объектов Repository, найденных по запросу
};

type SearchRepositoriesRequest = {
	query: string; // Поисковый запрос
	page?: number; // Номер страницы результатов поиска
	per_page?: number; // Количество результатов на странице
};

type RepTableDataDto = Pick<Repository, 'name' | 'language' | 'forks_count' | 'stargazers_count' | 'updated_at'>; // Тип для данных таблицы репозиториев, выбирает только необходимые поля из Repository

type RepDetailsDataDto = Pick<Repository, 'name' | 'topics' | 'language' | 'stargazers_count' | 'license'>; // Тип для данных деталей репозитория, выбирает только необходимые поля из Repository

export type { Repository, SearchRepositoriesResponse, RepTableDataDto, RepDetailsDataDto, SearchRepositoriesRequest }; // Экспортируем все типы
