import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesResponse } from 'src/models/tasks';
import { RootState } from 'src/store/store';

const initialState: SearchRepositoriesResponse = {
    total_count: 0,
    incomplete_results: false,
    items: [],
};

const reposDataSlice = createSlice({
	name: 'reposDataSlice',
	initialState,
    reducers: {
        setReposData: (state, action: PayloadAction<SearchRepositoriesResponse>) => {
          state.total_count = action.payload.total_count;
          state.incomplete_results = action.payload.incomplete_results;
          state.items = action.payload.items;
        },
    },
});

export const repDataSelector = () => (state: RootState) => state.reposData;
export const { setReposData } = reposDataSlice.actions;
export default reposDataSlice.reducer;
export { reposDataSlice };
