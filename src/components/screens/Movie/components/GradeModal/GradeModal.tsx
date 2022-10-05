import { Modal } from '@/UI/Modal/Modal';
import { Grade } from '@/UI/Grade/Grade';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';
import { gradeFilm } from '@/api';
import { useRouter } from 'next/router';

export const GradeModal = () => {
	const [rating, setRating] = useState<number>(0);

	const {
		query: { id },
	} = useRouter();

	const { isVisibleGradeModal } = useTypedSelector((state) => state.modal);

	const { showGradeModal } = useTypedActions((state) => state.modal);

	const handleClose = () => showGradeModal(false);

	const handleGrade = () => {
		gradeFilm({ id, rating });
		handleClose();
	};

	const { ModalTitle, ModalButton } = Modal;

	return (
		<Modal fullscreen variant="grade" open={isVisibleGradeModal} onClose={handleClose}>
			<ModalTitle>Оцените фильм по 10-ти бальной шкале</ModalTitle>
			<Grade value={rating} setValue={setRating} />
			<ModalButton onClick={handleGrade} disabled={rating === 0}>
				Поставить оценку
			</ModalButton>
		</Modal>
	);
};
