import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisibleRegisterModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setShowRegisterModal: (state, action) => {
            state.isVisibleRegisterModal = action.payload
        }
    }
})

export const {setShowRegisterModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer