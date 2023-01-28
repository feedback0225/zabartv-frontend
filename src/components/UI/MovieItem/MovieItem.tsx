import { FC } from 'react';
//
import NextLink from 'next/link';
import Image from 'next/image';
// components/UI
import { Chip } from '@/UI/Chip/Chip';
// types
import { IMovieItem, IOption } from '@/types/index';
// utils
import { getType } from '@/utils/getType';
import getShowTimeMovie from '@/utils/getShowTimeMovie';
//
import styles from './MovieItem.module.scss';

interface MovieItemProps {
	item: IMovieItem;
	href?: string;
}

export const MovieItem: FC<MovieItemProps> = ({ item, href }) => {
	const url = `${item?.preview_base_url}/${item?.preview_path}`;

	const genre = 'Комедия';
	const chip = getType(item?.type);
	const status = 'Подписка';

	return (
		<NextLink href={href || `/movie/${item?.slug}`}>
			<a className={styles.item}>
				<div className={styles.top}>
					<Image priority quality={100} layout="fill" src={url} alt={item?.content?.title} />
					{item?.rating && (
						<span className={styles.rating}>{Number(item?.rating).toFixed(1)}</span>
					)}
					<div className={styles.content}>
						<div className={styles.chips}>
							<Chip className={styles.chip}>{genre}</Chip>
							<Chip className={styles.chip}>{chip}</Chip>
						</div>
						<div className={styles.info}>
							{/* displayed if there is a clock and the type is not equal to 6 */}
							{item?.hours !== 0 && item?.minutes !== 6 && (
								<span className={styles.infoItem}>
									{getShowTimeMovie(item?.hours, item?.minutes)}
								</span>
							)}

							{/* shown if there are only minutes and the type is not equal to 6 */}
							{item?.hours === 0 && item?.minutes && item?.type !== 6 && (
								<span className={styles.infoItem}>
									{getShowTimeMovie(item?.hours, item?.minutes)}
								</span>
							)}

							{item?.options?.map((el: IOption) => (
								<span key={el.filter_id} className={styles.infoItem}>
									{el.option_value}
								</span>
							))}
						</div>
					</div>
				</div>
				<h3 className={styles.title}>{item?.content?.title}</h3>
				<span className={styles.status}>{status}</span>
			</a>
		</NextLink>
	);
};
