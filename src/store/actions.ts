import { menuActions } from './reducers/menuSlice';
import { searchActions } from './reducers/searchSlice';
import { modalActions } from './reducers/modalSlice';
import { userActions } from './reducers/userSlice';
import { langActions } from './reducers/langSlice';
import { playerActions } from './reducers/playerSlice';

export const ActionsCreators = {
	user: userActions,
	modal: modalActions,
	search: searchActions,
	menu: menuActions,
	lang: langActions,
	player: playerActions
};
