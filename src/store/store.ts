import {
	Action,
	AnyAction,
	combineReducers,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { menuReducer } from './reducers/menuSlice';
import { searchReducer } from './reducers/searchSlice';
import { modalReducer } from './reducers/modalSlice';
import { userReducer } from './reducers/userSlice';
import { subscribeReducer } from './reducers/subscribeSlice';
  
const combinedReducer = combineReducers({
	menu: menuReducer,
	search: searchReducer,
	modal: modalReducer,
	user: userReducer,
	subscribe: subscribeReducer
});
  
const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
	  	};
		
	  	return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore = () => {
	return configureStore({
		/* @ts-ignore */
		reducer,
	})
}
  
type Store = ReturnType<typeof makeStore>;
  
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
  
export const wrapper = createWrapper(makeStore, { debug: false });