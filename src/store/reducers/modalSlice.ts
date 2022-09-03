import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisibleRegisterModal: false,
    isVisibleSubscribeModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showRegisterModal: (state, action) => {
            state.isVisibleRegisterModal = action.payload
        },
        showSubscribeModal: (state, action) => {
            state.isVisibleSubscribeModal = action.payload
        },
    }
})

export const {showRegisterModal, showSubscribeModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer