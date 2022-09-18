import { showMenu } from './reducers/menuSlice';
import { setVisibleSearch, setSearch } from './reducers/searchSlice';
import { showRegisterModal, showSubscribeModal, showGradeModal, showAuthModal } from './reducers/modalSlice';
import { setSubscribedEmail, setEmail, setPassword, setDate } from './reducers/userSlice';

export {
	showMenu,
	setVisibleSearch,
	setSearch,
	showRegisterModal,
	showSubscribeModal,
	showAuthModal,
	showGradeModal,
	setSubscribedEmail,
	setEmail,
	setPassword,
	setDate,
};
