type Repository = {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	language: string | null; // Язык репозитория
	forks_count: number;     // Число форков
	stargazers_count: number; // Число звёзд
	updated_at: string;       // Дата обновления
	license: {
		name: string | null; // Название лицензии
		// ... другие поля лицензии, если необходимо
	} | null;
};

type SearchRepositoriesResponse = {
	total_count: number;
	incomplete_results: boolean;
	items: Repository[];
};

export type { SearchRepositoriesResponse };