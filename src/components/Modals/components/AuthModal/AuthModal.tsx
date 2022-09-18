import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';
import classNames from 'classnames';

export const AuthModal = () => {
	const { ModalTitle, ModalTabs, ModalInputs, ModalInput, ModalButton } = Modal;

	const { isVisibleAuthModal } = useTypedSelector((state) => state.modal);

	const [authState, setAuthState] = useState<'login' | 'register'>('login');

	const { showAuthModal, showRegisterModal } = useTypedActions((state) => state.modal);

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
			<ModalButton>Войти</ModalButton>
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
		</Modal>
	);
};
