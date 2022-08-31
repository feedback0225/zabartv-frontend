import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {menuReducer} from "./reducers/menuSlice";
import {searchReducer} from "./reducers/searchSlice";

const rootReducer = combineReducers({
    menuReducer,
    searchReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']