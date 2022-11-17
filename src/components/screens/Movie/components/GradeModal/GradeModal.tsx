import { Modal } from '@/UI/Modal/Modal';
import { Grade } from '@/UI/Grade/Grade';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IGradeResponse } from '@/types/IGrade';
import { ICheckRating } from '@/types/ICheckRating';
import axios from '@/utils/axios';

export const GradeModal = () => {
	const [rating, setRating] = useState<number>(0);

	const {
		query: { id },
	} = useRouter();

	const { isVisibleGradeModal } = useTypedSelector((state) => state.modal);

	const { showGradeModal } = useTypedActions((state) => state.modal);

	const handleClose = () => showGradeModal(false);

	const gradeFilm = async ({ id, rating }: IGradeResponse) => {
		try {
			await axios.get<ICheckRating>('/items/rating', {
				params: {
					film_id: id,
					type: 'add',
					rating,
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleGrade = () => {
		gradeFilm({ id, rating });
		handleClose();
	};

	const { ModalTitle, ModalButton } = Modal;

	const getRating = async () => {
		try {
			const { data } = await axios.get<ICheckRating>('/items/rating', {
				params: {
					film_id: id,
					type: 'check',
				},
			});

			setRating(data?.film_rating ? data?.film_rating : 0);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRating();
	}, []);

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
