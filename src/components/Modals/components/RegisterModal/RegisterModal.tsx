import { Modal } from '@/UI/Modal/Modal';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const RegisterModal = () => {
	const { ModalTitle, ModalInputs, ModalInput, ModalButton } = Modal;

	const { isVisibleRegisterModal } = useTypedSelector((state) => state.modalReducer);

	const { showRegisterModal } = useActions();

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
