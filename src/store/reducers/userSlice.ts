import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'Александр Самойлов',
	email: 'aassmoilov@gmail.com',
	password: '123123123',
	date: '11.11.1111',
	isSubscribedEmail: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSubscribedEmail: (state) => {
			state.isSubscribedEmail = !state.isSubscribedEmail;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setDate: (state, action) => {
			state.date = action.payload;
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
