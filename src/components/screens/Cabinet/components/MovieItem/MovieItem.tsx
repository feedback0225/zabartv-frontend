import { FC } from 'react';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { FavouriteIcon } from '@/icons';
import { NextLink } from '@/components/NextLink/NextLink';
import Image from 'next/image';
import styles from './MovieItem.module.scss';

interface MovieItemProps {
	item: any;
	favourite?: boolean;
}

export const MovieItem: FC<MovieItemProps> = ({ item, favourite }) => {
	const { image, href, title, type } = item;

	return (
		<div className={styles.item}>
			<div className={styles.top}>
				<NextLink href={href}>
					<a className={styles.poster}>
						<Image
							priority
							quality={100}
							unoptimized
							layout="fill"
							className={styles.image}
							src={image}
							alt={title}
						/>
					</a>
				</NextLink>
				{favourite && (
					<ButtonBase className={styles.btn}>
						<FavouriteIcon />
					</ButtonBase>
				)}
			</div>
			<span className={styles.status}>{type}</span>
			<NextLink href={href}>
				<a className={styles.title}>{title}</a>
			</NextLink>
		</div>
	);
};
