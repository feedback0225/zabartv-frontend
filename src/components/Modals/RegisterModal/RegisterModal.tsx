import { Modal } from "@/UI/Modal/Modal"
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";

export const RegisterModal = () => {

    const {ModalTitle, ModalInputs, ModalInput, ModalButton} = Modal;

    const {isVisibleRegisterModal} = useTypedSelector(state => state.modalReducer)

    const {setShowRegisterModal} = useActions()

    const handleClose = () => setShowRegisterModal(false)

    return (
        <Modal open={isVisibleRegisterModal} onClose={handleClose}>
            <ModalTitle>Регистрация</ModalTitle>
            <ModalInputs>
                <ModalInput placeholder="Придумайте пароль" />
                <ModalInput placeholder="Повторите пароль" />
            </ModalInputs>
            <ModalButton>Зарегистрироваться</ModalButton>
        </Modal>
    )
}