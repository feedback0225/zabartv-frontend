import { IPackage } from '@/types/IPackage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPackages } from '@/api/getPackages';

interface IState {
  data: IPackage[] | null;
  isLoading: boolean;
  isError: boolean
}

const initialState: IState = {
  data: [],
  isLoading: true,
  isError: false
}

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {},
  extraReducers: {
    [getPackages.fulfilled.type]: (state, action: PayloadAction<IPackage[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload
    },
    [getPackages.pending.type]: state => {
      state.isLoading = true;
    },
    [getPackages.rejected.type]: state => {
      state.isLoading = false
      state.isError = true
    }
  }
});

export const subscribeReducer = subscribeSlice.reducer;