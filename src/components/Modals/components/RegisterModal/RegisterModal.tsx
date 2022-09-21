import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const RegisterModal = () => {
	const { isVisibleRegisterModal } = useTypedSelector((state) => state.modal);

	const { showRegisterModal } = useTypedActions((state) => state.modal);

	const handleClose = () => showRegisterModal(false);

	return (
		<Modal fullscreen open={isVisibleRegisterModal} onClose={handleClose}>
			<Modal.Title>Регистрация</Modal.Title>
			<Modal.Inputs>
				<Modal.Input type="password" placeholder="Придумайте пароль" />
				<Modal.Input type="password" placeholder="Повторите пароль" />
			</Modal.Inputs>
			<Modal.Button>Зарегистрироваться</Modal.Button>
		</Modal>
	);
};
