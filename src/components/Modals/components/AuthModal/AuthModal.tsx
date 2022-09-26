import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';

export const AuthModal = () => {
	const { isVisibleAuthModal } = useTypedSelector((state) => state.modal);

	const { showAuthModal, showRegisterModal } = useTypedActions((state) => state.modal);

	const [authState, setAuthState] = useState<'login' | 'register'>('login');

	const { ModalInputs, ModalInput, ModalButton, ModalTabs, ModalTitle, ModalLink } = Modal;

	const handleClose = () => showAuthModal(false);

	const handleShowRegisterModal = () => {
		handleClose();
		showRegisterModal(true);
	};

	const LoginContent = (
		<>
			<ModalInputs>
				<ModalInput type="email" placeholder="Электронная почта" />
				<ModalInput type="password" placeholder="Пароль" />
			</ModalInputs>
			<ModalButton>Войти в аккаунт</ModalButton>
		</>
	);

	const RegisterContent = (
		<>
			<ModalInputs>
				<ModalInput type="email" placeholder="Электронная почта" />
			</ModalInputs>
			<ModalButton onClick={handleShowRegisterModal}>Подтвердить почту</ModalButton>
		</>
	);

	return (
		<Modal fullscreen open={isVisibleAuthModal} onClose={handleClose}>
			<ModalTabs>
				<ModalTitle
					onClick={() => setAuthState('login')}
					activeClassName={authState === 'login'}
				>
					Вход
				</ModalTitle>
				<ModalTitle
					onClick={() => setAuthState('register')}
					activeClassName={authState === 'register'}
				>
					Регистрация
				</ModalTitle>
			</ModalTabs>
			{authState === 'login' ? LoginContent : RegisterContent}
			<ModalLink as="button">Забыли пароль?</ModalLink>
		</Modal>
	);
};
