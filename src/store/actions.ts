import { menuActions } from './reducers/menuSlice';
import { searchActions } from './reducers/searchSlice';
import { modalActions } from './reducers/modalSlice';
import { userActions } from './reducers/userSlice';

export const ActionsCreators = {
    user: userActions,
    modal: modalActions,
    search: searchActions,
    menu: menuActions
}