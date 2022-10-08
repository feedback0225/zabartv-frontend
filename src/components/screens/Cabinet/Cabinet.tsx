import { Avatar, SubscribeInfo, Settings, Favourites, Purchases, Views } from './components/index';
import { MailIcon } from '@/icons';
import { Tabs } from '@/UI/Tabs/Tabs';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect } from 'react';
import { getHistoryPayments, getMe } from '@/reducers/user/thunks';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Spinner, SpinnerSizes } from '@/UI/Spinner/Spinner';
import { Link } from '@/UI/Link/Link';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@/constants/routes';
import axios from '@/utils/axios';
import classNames from 'classnames';
import styles from './Cabinet.module.scss';

export const Cabinet = () => {
	const { push } = useRouter();
	const { data, isLoading } = useTypedSelector((state) => state.user);
	const { logout } = useTypedActions((state) => state.auth);

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

	const dispatch = useAppDispatch();

	const fetchData = async () => {
		const {
			payload: { id },
		} = await dispatch(getMe());

		await dispatch(getHistoryPayments(id as number));
	};

	const logoutUser = async () => {
		await axios.get('/session/logout');
		logout();
		push(RoutesEnum.Home);
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
							<Link onClick={logoutUser} className={styles.logout} as={'button'}>
								Выйти
							</Link>
						</div>
					</div>
					<SubscribeInfo info={USER_INFO} />
				</div>
				<Tabs className={styles.tabs} tabs={USER_TABS} />
			</div>

			{isLoading && (
				<div className={styles.loader}>
					<Spinner size={SpinnerSizes.large} />
				</div>
			)}
		</section>
	);
};
