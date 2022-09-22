import { Tabs } from '@/UI/Tabs/Tabs';
import { SeasonsCarousel } from './components/SeasonsCarousel/SeasonsCarousel';
import { FC } from 'react';
import { IPart } from '@/types/IPart';
import classNames from 'classnames';
import styles from './Seasons.module.scss';

interface SeasonsProps {
	parts: IPart[] | undefined;
}

export const Seasons: FC<SeasonsProps> = ({ parts }) => {
	const tabs =
		parts?.map((part) => {
			const txt = `${part.season_number} сезон`;

			// Временно

			return { txt, content: <SeasonsCarousel /> };
		}) || [];

	return (
		<div className={styles.seasons}>
			<div className={classNames('container', styles.container)}>
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
};
