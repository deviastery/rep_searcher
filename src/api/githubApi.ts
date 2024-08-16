import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchRepositoriesRequest, SearchRepositoriesResponse } from 'src/models/repos';

const githubApi = createApi({
	reducerPath: 'githubApi',
	tagTypes: ['Tasks'],
	keepUnusedDataFor: 60,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	endpoints: (builder) => ({
		getRepositories: builder.mutation<SearchRepositoriesResponse, SearchRepositoriesRequest>({
			query: ({ query, page, per_page }) => ({
				url: '/search/repositories',
				params: {
					q: query,
					page,
					per_page,
				},
			}),
		}),
	}),
});

export const { useGetRepositoriesMutation } = githubApi;

export default githubApi;
