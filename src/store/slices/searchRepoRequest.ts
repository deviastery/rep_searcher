import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesRequest } from 'src/models/tasks';
import { RootState } from 'src/store/store';

const initialState: SearchRepositoriesRequest = {
    query: '', 
    per_page: 7, 
    page: 1,
};

const searchRepoRequestSlice = createSlice({
	name: 'searchRepoRequestSlice',
	initialState,
    reducers: {
        setSearchRepoRequest: (state, action: PayloadAction<SearchRepositoriesRequest>) => {
          state.query = action.payload.query;
          state.per_page = action.payload.per_page;
          state.page = action.payload.page;
        },
    },
});

export const repDataSelector = () => (state: RootState) => state.searchRepoRequest;
export const { setSearchRepoRequest } = searchRepoRequestSlice.actions;
export default searchRepoRequestSlice.reducer;
export { searchRepoRequestSlice };
