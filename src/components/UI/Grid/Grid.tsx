import { FC } from 'react';
import { MovieItem } from '@/UI/MovieItem/MovieItem';
import { Button } from '@/UI/Button/Button';
import { ChevronArrowIcon } from '@/icons';
import styles from './Grid.module.scss';
import { IMovieItem } from '@/types/IMovieItem';

interface GridProps {
	data: IMovieItem[];
}

export const Grid: FC<GridProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{data.map((item) => (
					<MovieItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};
