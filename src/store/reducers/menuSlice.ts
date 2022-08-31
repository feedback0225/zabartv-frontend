import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenMenu: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.isOpenMenu = action.payload
        }
    }
})

export const {toggleMenu} = menuSlice.actions
export const menuReducer = menuSlice.reducer