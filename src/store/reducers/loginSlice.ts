import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from '@/api';

interface IState {
	data: any;
	isLoading: boolean;
	isError: boolean;
}

const initialState: IState = {
	data: null,
	isLoading: true,
	isError: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: {
		[login.fulfilled.type]: (state, action: PayloadAction<any>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[login.pending.type]: (state) => {
			state.isLoading = true;
		},
		[login.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
