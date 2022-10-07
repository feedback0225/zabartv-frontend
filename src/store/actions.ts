import { menuActions } from './reducers/menuSlice';
import { searchActions } from './reducers/searchSlice';
import { modalActions } from './reducers/modalSlice';
import { userActions } from './reducers/userSlice';
import { playerActions } from './reducers/playerSlice';
import { authActions } from './reducers/authSlice';

export const ActionsCreators = {
	user: userActions,
	modal: modalActions,
	search: searchActions,
	menu: menuActions,
	player: playerActions,
	auth: authActions,
};
