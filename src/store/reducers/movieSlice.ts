import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovieById } from '@/api/api';
import { IMovie } from '@/types/IMovie';

interface IState {
	data: [IMovie] | [];
	isLoading: boolean;
	isError: boolean;
}

const initialState: IState = {
	data: [],
	isLoading: true,
	isError: false,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: {
		[getMovieById.fulfilled.type]: (state, action: PayloadAction<[IMovie]>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[getMovieById.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getMovieById.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const movieReducer = movieSlice.reducer;
