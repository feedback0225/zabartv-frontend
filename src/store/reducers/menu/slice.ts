import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFooterMenu, getNavMenu } from './thunks';

interface IMenuItem {
	id: number;
	link_type: number;
	link_type_name: string;
	customer_group: number;
	slug: string;
	old_slug: string;
	link: string;
	class: string;
	icon: string;
	badge: string;
	full_link: string;
	content: {
		title_in_nav: string;
	};
}

interface IState {
	isOpened: boolean;
	navMenu: IMenuItem[] | [];
	footerMenu: IMenuItem[] | [];
}

const initialState: IState = {
	isOpened: false,
	navMenu: [],
	footerMenu: [],
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		showMenu: (state, action) => {
			state.isOpened = action.payload;
		},
	},
	extraReducers: {
		[getNavMenu.fulfilled.type]: (state, action: PayloadAction<IMenuItem[]>) => {
			state.navMenu = action.payload;
		},
		[getFooterMenu.fulfilled.type]: (state, action: PayloadAction<IMenuItem[]>) => {
			state.footerMenu = action.payload;
		},
	},
});

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
