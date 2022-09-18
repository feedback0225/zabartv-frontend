import { RegisterModal } from './components/RegisterModal/RegisterModal';
import { SubscribeModal } from './components/SubscribeModal/SubscribeModal';
import { GradeModal } from './components/GradeModal/GradeModal';
import { AuthModal } from './components/AuthModal/AuthModal';

export const Modals = () => {
	return (
		<>
			<SubscribeModal />
			<RegisterModal />
			<GradeModal />
			<AuthModal />
		</>
	);
};
