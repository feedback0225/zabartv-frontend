import { Modal } from '@/UI/Modal/Modal';
import { Grade } from '@/UI/Grade/Grade';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';

export const GradeModal = () => {
	const [value, setValue] = useState<number>(0);

	const { ModalTitle, ModalButton } = Modal;

	const { isVisibleGradeModal } = useTypedSelector((state) => state.modalReducer);

	const { showGradeModal } = useActions();

	const handleClose = () => showGradeModal(false);

	const handleGrade = () => {
		// axios.post....
		handleClose();
	};

	return (
		<Modal fullscreen variant="grade" open={isVisibleGradeModal} onClose={handleClose}>
			<ModalTitle>Оцените фильм по 10-ти бальной шкале</ModalTitle>
			<Grade value={value} setValue={setValue} />
			<ModalButton onClick={handleGrade} disabled={value === 0}>
				Поставить оценку
			</ModalButton>
		</Modal>
	);
};
