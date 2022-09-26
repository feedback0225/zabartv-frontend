import { Modal } from '@/UI/Modal/Modal';
import { Grade } from '@/UI/Grade/Grade';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';

export const GradeModal = () => {
	const [value, setValue] = useState<number>(0);

	const { isVisibleGradeModal } = useTypedSelector((state) => state.modal);

	const { showGradeModal } = useTypedActions((state) => state.modal);

	const handleClose = () => showGradeModal(false);

	const handleGrade = () => {
		// axios.post....
		handleClose();
	};

	const { ModalTitle, ModalButton } = Modal;

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
