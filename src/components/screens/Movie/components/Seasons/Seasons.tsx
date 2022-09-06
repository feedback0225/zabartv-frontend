import { Tabs } from '@/UI/Tabs/Tabs';
import { SeasonsCarousel } from './components/SeasonsCarousel/SeasonsCarousel';
import classNames from 'classnames';
import styles from './Seasons.module.scss';

export const Seasons = () => {
	const tabs = [
		{ txt: '1 сезон', content: <SeasonsCarousel /> },
		{ txt: '2 сезон', content: <SeasonsCarousel /> },
		{ txt: '3 сезон', content: <SeasonsCarousel /> },
		{ txt: '4 сезон', content: <SeasonsCarousel /> },
		{ txt: '5 сезон', content: <SeasonsCarousel /> },
	];

	return (
		<div className={styles.seasons}>
			<div className={classNames('container', styles.container)}>
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
};
