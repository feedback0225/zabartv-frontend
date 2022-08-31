import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSearch: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearch: (state, action) => {
            state.isOpenSearch = action.payload
        }
    }
})

export const {toggleSearch} = searchSlice.actions
export const searchReducer = searchSlice.reducer