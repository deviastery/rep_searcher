import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchRepositoriesResponse } from 'src/models/tasks';

const githubApi = createApi({
	reducerPath: 'githubApi',
	tagTypes: ['Tasks'],
	keepUnusedDataFor: 60,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	endpoints: (builder) => ({
		getRepositories: builder.query<SearchRepositoriesResponse, string>({
			query: (searchName) => ({
			  url: '/search/repositories',
			  params: {
				q: searchName,
				per_page: 100,
			  },
			}),
		}),
	}),
});

export const { useGetRepositoriesQuery } = githubApi;

export default githubApi;
