import { IPackage } from '@/types/IPackage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHomeCategories } from '@/api/api';

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

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    [getHomeCategories.fulfilled.type]: (state, action: PayloadAction<IPackage[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload
    },
    [getHomeCategories.pending.type]: state => {
      state.isLoading = true;
    },
    [getHomeCategories.rejected.type]: state => {
      state.isLoading = false
      state.isError = true
    }
  }
});

export const homeReducer = homeSlice.reducer;