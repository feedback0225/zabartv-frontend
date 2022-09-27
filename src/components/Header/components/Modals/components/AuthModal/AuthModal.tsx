import { useState } from 'react';
import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RegisterContent } from './components/RegisterContent/RegisterContent';
import { LoginContent } from './components/LoginContent/LoginContent';
import styles from './AuthModal.module.scss';
import classNames from 'classnames';

export const AuthModal = () => {
	const { isVisibleAuthModal } = useTypedSelector((state) => state.modal);

	const { showAuthModal, showForgotPasswordModal } = useTypedActions((state) => state.modal);

	const [authState, setAuthState] = useState<'login' | 'register'>('login');

	const { ModalTabs, ModalTitle, ModalLink } = Modal;

	const handleClose = () => showAuthModal(false);

	const handleShowForgotPasswordModal = () => {
		handleClose();
		showForgotPasswordModal(true);
	};

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
			<div className={classNames(styles.content, authState === 'login' && styles.active)}>
				<LoginContent />
			</div>
			<div className={classNames(styles.content, authState === 'register' && styles.active)}>
				<RegisterContent />
			</div>
			<ModalLink onClick={handleShowForgotPasswordModal} as="button">
				Забыли пароль?
			</ModalLink>
		</Modal>
	);
};
