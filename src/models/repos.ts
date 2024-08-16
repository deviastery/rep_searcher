type Repository = {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	topics: string[];
	html_url: string;
	language: string | null;
	forks_count: number;
	stargazers_count: number;
	updated_at: string;
	license: {
		name: string | null;
	} | null;
};

type SearchRepositoriesResponse = {
	total_count: number;
	incomplete_results: boolean;
	items: Repository[];
};

type SearchRepositoriesRequest = {
	query: string;
	page?: number;
	per_page?: number;
};

type RepTableDataDto = Pick<Repository, 'name' | 'language' | 'forks_count' | 'stargazers_count' | 'updated_at'>;

type RepDetailsDataDto = Pick<Repository, 'name' | 'topics' | 'language' | 'stargazers_count' | 'license'>;

export type { Repository, SearchRepositoriesResponse, RepTableDataDto, RepDetailsDataDto, SearchRepositoriesRequest };
