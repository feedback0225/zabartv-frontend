import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHomeCategories } from '@/api';
import { ICategory } from '@/types/ICategory';

interface IState {
	data: ICategory[] | null;
	isLoading: boolean;
	isError: boolean;
}

const initialState: IState = {
	data: [],
	isLoading: true,
	isError: false,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
	extraReducers: {
		[getHomeCategories.fulfilled.type]: (state, action: PayloadAction<ICategory[]>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[getHomeCategories.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getHomeCategories.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const homeReducer = homeSlice.reducer;
