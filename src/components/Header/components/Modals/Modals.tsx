import { RegisterModal } from './components/RegisterModal/RegisterModal';
import { SubscribeModal } from './components/SubscribeModal/SubscribeModal';
import { AuthModal } from './components/AuthModal/AuthModal';
import { ForgotPasswordModal } from './components/ForgotPasswordModal/ForgotPasswordModal';

export const Modals = () => {
	return (
		<>
			<SubscribeModal />
			<RegisterModal />
			<ForgotPasswordModal />
			<AuthModal />
		</>
	);
};
