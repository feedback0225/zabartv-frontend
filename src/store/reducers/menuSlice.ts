import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpened: false,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		showMenu: (state, action) => {
			state.isOpened = action.payload;
		},
	},
});

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
