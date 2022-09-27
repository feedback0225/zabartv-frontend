import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isVisiblePlayer: false,
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		openPlayer: (state, action) => {
			state.isVisiblePlayer = action.payload;
		},
	},
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
