import { Avatar, SubscribeInfo, Settings, Favourites, Purchases, Views } from './components/index';
import { MailIcon } from '@/icons';
import { Tabs } from '@/UI/Tabs/Tabs';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import classNames from 'classnames';
import styles from './Cabinet.module.scss';

export const Cabinet = () => {
	const { data } = useTypedSelector((state) => state.user);

	/* временно */
	const USER_INFO = {
		title: '30 дней за',
		price: '12€',
		desc: 'Следующая оплата 22.09.22',
	};

	const USER_TABS = [
		{ txt: 'Настройки', content: <Settings data={data} /> },
		{ txt: 'Избранное', content: <Favourites /> },
		{ txt: 'История покупок', content: <Purchases /> },
		{ txt: 'История просмотров', content: <Views /> },
	];

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.top}>
					<div className={styles.left}>
						<Avatar name={data.username} />
						<div className={styles.text}>
							<h1 className={styles.name}>{data.username}</h1>
							<span className={styles.mail}>
								<MailIcon />
								{data.email}
							</span>
						</div>
					</div>
					<SubscribeInfo info={USER_INFO} />
				</div>
				<Tabs className={styles.tabs} tabs={USER_TABS} />
			</div>
		</section>
	);
};
