import { FC } from 'react';
import { MovieItem } from '@/UI/MovieItem/MovieItem';
import { Button } from '@/UI/Button/Button';
import styles from './Grid.module.scss';
import { ChevronArrowIcon } from '@/components/Icons/Icons';

interface GridProps {
	//временно
	data: any[];
}

export const Grid: FC<GridProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{data.map((item) => (
					<MovieItem key={item.id} item={item} />
				))}
			</div>
			<Button
				className={styles.btn}
				variant="stroke"
				icon={<ChevronArrowIcon />}
			>
				Показать еще
			</Button>
		</div>
	);
};
