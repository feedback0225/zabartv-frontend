import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const RegisterModal = () => {
	const { ModalTitle, ModalInputs, ModalInput, ModalButton } = Modal;

	const { isVisibleRegisterModal } = useTypedSelector((state) => state.modal);

	const { showRegisterModal } = useTypedActions((state) => state.modal);

	const handleClose = () => showRegisterModal(false);

	return (
		<Modal fullscreen open={isVisibleRegisterModal} onClose={handleClose}>
			<ModalTitle>Регистрация</ModalTitle>
			<ModalInputs>
				<ModalInput type="password" placeholder="Придумайте пароль" />
				<ModalInput type="password" placeholder="Повторите пароль" />
			</ModalInputs>
			<ModalButton>Зарегистрироваться</ModalButton>
		</Modal>
	);
};
