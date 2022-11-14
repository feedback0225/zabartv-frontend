import { FC } from 'react';
import { Chip } from '@/UI/Chip/Chip';
import { IMovieItem } from '@/types/IMovieItem';
import NextLink from 'next/link';
import Image from 'next/image';
import styles from './MovieItem.module.scss';

interface MovieItemProps {
	item: IMovieItem;
	href?: string;
}

export const MovieItem: FC<MovieItemProps> = ({ item, href }) => {
	const {
		content: { title },
		options,
		id,
		img_base_url,
		img_path,
		rating,
		hours,
		minutes,
	} = item;

	const url = `${img_base_url}/${img_path}`;

	const genre = 'Комедия';
	const type = 'Фильм';
	const status = 'Подписка';

	return (
		<NextLink href={href || `/movie/${id}`}>
			<a className={styles.item}>
				<div className={styles.top}>
					<Image priority quality={100} layout="fill" src={url} alt={title} />
					{rating && <span className={styles.rating}>{Number(rating).toFixed(1)}</span>}
					<div className={styles.content}>
						<div className={styles.chips}>
							<Chip className={styles.chip}>{genre}</Chip>
							<Chip className={styles.chip}>{type}</Chip>
						</div>
						<div className={styles.info}>
							<span className={styles.infoItem}>
								{hours} час {minutes} минуты
							</span>
							{options?.map((el) => (
								<span key={el.filter_id} className={styles.infoItem}>
									{el.option_value}
								</span>
							))}
						</div>
					</div>
				</div>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.status}>{status}</span>
			</a>
		</NextLink>
	);
};
