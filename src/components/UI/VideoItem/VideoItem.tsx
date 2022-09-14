import { PlayIcon } from '@/icons';
import { FC } from 'react';
import Image from 'next/image';
import styles from './VideoItem.module.scss';

interface VideoItemProps {
	item: any;
}

export const VideoItem: FC<VideoItemProps> = ({ item }) => {
	const { poster, id, title, desc } = item;

	return (
		<a className={styles.item}>
			<div className={styles.top}>
				<Image priority quality={100} unoptimized layout="fill" src={poster} alt={title} />
				<span className={styles.play}>
					<PlayIcon />
				</span>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<span className={styles.desc}>{desc}</span>
		</a>
	);
};
