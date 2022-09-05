import { Modal } from "@/UI/Modal/Modal"
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";

export const GradeModal = () => {

    const {ModalTitle,  ModalButton} = Modal;

    const {isVisibleGradeModal} = useTypedSelector(state => state.modalReducer)

    const {showGradeModal} = useActions()

    const handleClose = () => showGradeModal(false)

    return (
        <Modal fullscreen open={isVisibleGradeModal} onClose={handleClose}>
            <ModalTitle>Оцените фильм по 10-ти бальной шкале</ModalTitle>
            <ModalButton>Поставить оценку</ModalButton>
        </Modal>
    )
}