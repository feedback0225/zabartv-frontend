import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';

export const ForgotPasswordModal = () => {
	const { isVisibleForgotPasswordModal } = useTypedSelector((state) => state.modal);

	const { showForgotPasswordModal } = useTypedActions((state) => state.modal);

	const { ModalTitle, ModalDesc, ModalInputs, ModalInput, ModalButton } = Modal;

	const handleClose = () => showForgotPasswordModal(false);

	return (
		<Modal fullscreen open={isVisibleForgotPasswordModal} onClose={handleClose}>
			<ModalTitle>Забыли пароль</ModalTitle>
			<ModalDesc>Мы вышлем вам письмо с ссылкой для измены пароля</ModalDesc>
			<ModalInputs>
				<ModalInput type="email" placeholder="Email" />
			</ModalInputs>
			<ModalButton>Получить письмо</ModalButton>
		</Modal>
	);
};
