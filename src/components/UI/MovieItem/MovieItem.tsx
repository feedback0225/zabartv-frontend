import { FC } from 'react';
import { Chip } from '@/UI/Chip/Chip';
import Image from 'next/image';
import styles from './MovieItem.module.scss';
import Link from 'next/link';

interface MovieItemProps {
	//временно
	item: any;
}

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
	const { image, id, title, rating, genre, type, time, year, age, status } = item;

	return (
		<Link href="/movie">
			<a className={styles.item}>
				<div className={styles.top}>
					<Image priority quality={100} unoptimized layout="fill" src={image} alt={title} />
					<span className={styles.rating}>{rating}</span>
					<div className={styles.content}>
						<div className={styles.chips}>
							<Chip className={styles.chip}>{genre}</Chip>
							<Chip className={styles.chip}>{type}</Chip>
						</div>
						<div className={styles.info}>
							<span className={styles.infoItem}>{time}</span>
							<span className={styles.infoItem}>{year}</span>
							<span className={styles.infoItem}>{age}</span>
						</div>
					</div>
				</div>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.status}>{status}</span>
			</a>
		</Link>
	);
};
