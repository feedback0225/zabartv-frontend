import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {register} from '@/api'

interface IState {
	email: string;
	data: any;
	isLoading: boolean;
	isError: boolean;
}

const initialState: IState = {
	email: '',
	data: null,
	isLoading: true,
	isError: false,
};

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setEmail: (state, action) => {
            state.email = action.payload
        }
	},
	extraReducers: {
		[register.fulfilled.type]: (state, action: PayloadAction<any>) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		},
		[register.pending.type]: (state) => {
			state.isLoading = true;
		},
		[register.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const registerActions = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
