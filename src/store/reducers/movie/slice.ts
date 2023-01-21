import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '@/types/IMovie';
import { getMovieBySlug, gradeFilm } from './thunks';

interface IState {
	data: [IMovie] | [];
	isLoading: boolean;
	isError: boolean;
	newUserRating: number | null;
}

const initialState: IState = {
	data: [],
	isLoading: true,
	isError: false,
	newUserRating: null,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		clearUserRaiting(state) {
			state.newUserRating = null;
		},
	},
	extraReducers: {
		[gradeFilm.fulfilled.type]: (state, action) => {
			state.newUserRating = action.payload;
		},
		[gradeFilm.rejected.type]: (state, action) => {
			state.newUserRating = null;
		},
		[getMovieBySlug.fulfilled.type]: (state, action: PayloadAction<[IMovie]>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[getMovieBySlug.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getMovieBySlug.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const { clearUserRaiting } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
