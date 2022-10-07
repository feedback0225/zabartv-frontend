import { IHistoryPayment, IUser } from '@/types/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHistoryPayments, getMe } from '@/api';

interface IState {
	data: IUser;
	history: IHistoryPayment[] | [];
	isLoading: boolean;
	isError: boolean;
	name: string;
	email: string;
	password: string;
	date: string;
	isSubscribedEmail: boolean;
}

const initialState: IState = {
	data: {
		avatar_base_url: '',
		avatar_path: '',
		date_of_birth: '',
		email: '',
		first_name: '',
		last_name: '',
		username: '',
	},
	history: [],
	isLoading: true,
	isError: false,
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
	extraReducers: {
		[getMe.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[getMe.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getMe.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},

		[getHistoryPayments.fulfilled.type]: (state, action: PayloadAction<IHistoryPayment[]>) => {
			state.isLoading = false;
			state.isError = false;
			state.history = action.payload;
		},
		[getHistoryPayments.pending.type]: (state) => {
			state.isLoading = true;
		},
		[getHistoryPayments.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
