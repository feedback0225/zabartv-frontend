import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';

export const AuthModal = () => {
	const { isVisibleAuthModal } = useTypedSelector((state) => state.modal);

	const { showAuthModal, showRegisterModal } = useTypedActions((state) => state.modal);

	const [authState, setAuthState] = useState<'login' | 'register'>('login');

	const handleClose = () => showAuthModal(false);

	const handleShowRegisterModal = () => {
		handleClose();
		showRegisterModal(true);
	};

	const LoginContent = (
		<>
			<Modal.Inputs>
				<Modal.Input type="email" placeholder="Электронная почта" />
				<Modal.Input type="password" placeholder="Пароль" />
			</Modal.Inputs>
			<Modal.Button>Войти</Modal.Button>
		</>
	);

	const RegisterContent = (
		<>
			<Modal.Inputs>
				<Modal.Input type="email" placeholder="Электронная почта" />
			</Modal.Inputs>
			<Modal.Button onClick={handleShowRegisterModal}>Подтвердить почту</Modal.Button>
		</>
	);

	return (
		<Modal fullscreen open={isVisibleAuthModal} onClose={handleClose}>
			<Modal.Tabs>
				<Modal.Title
					onClick={() => setAuthState('login')}
					activeClassName={authState === 'login'}
				>
					Вход
				</Modal.Title>
				<Modal.Title
					onClick={() => setAuthState('register')}
					activeClassName={authState === 'register'}
				>
					Регистрация
				</Modal.Title>
			</Modal.Tabs>
			{authState === 'login' ? LoginContent : RegisterContent}
		</Modal>
	);
};
