import { IHistoryPayment, IUser } from '@/types/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHistoryPayments, getMe, updateUser } from './thunks';

interface IState {
	data: IUser;
	history: IHistoryPayment[] | [];
	isLoading: boolean;
	isError: boolean;
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
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
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
		[updateUser.fulfilled.type]: (state) => {
			state.isLoading = false;
			state.isError = false;
		},
		[updateUser.pending.type]: (state) => {
			state.isLoading = true;
		},
		[updateUser.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		}
	},
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
