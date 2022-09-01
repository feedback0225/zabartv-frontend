import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {menuReducer} from "./reducers/menuSlice";
import {searchReducer} from "./reducers/searchSlice";
import {langReducer} from "./reducers/langSlice";
import {modalReducer} from "./reducers/modalSlice";

const rootReducer = combineReducers({
    menuReducer,
    searchReducer,
    langReducer,
    modalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']