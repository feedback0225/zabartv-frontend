import { useTypedActions } from '@/hooks/useTypedActions';
import { Link } from '@/UI/Link/Link';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './Rating.module.scss';

interface RatingProps {
	rating: number;
	className?: string;
}

export const Rating: FC<RatingProps> = ({ className, rating }) => {
	const { showGradeModal } = useTypedActions((state) => state.modal);

	const handleShowModal = () => showGradeModal(true);

	return (
		<div className={classNames(styles.item, className)}>
			<span className={styles.rating}>{rating}</span>
			<div className={styles.text}>
				<span className={styles.caption}>Рейтинг ZabarTV</span>
				<Link onClick={handleShowModal} as="button" className={styles.btn} size="sm">
					Оценить
				</Link>
			</div>
		</div>
	);
};
