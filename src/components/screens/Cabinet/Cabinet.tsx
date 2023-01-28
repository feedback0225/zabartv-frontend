import { Avatar, Settings, Favourites, Purchases, Views } from './components/index';
import { MailIcon } from '@/icons';
import { Tabs } from '@/UI/Tabs/Tabs';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect } from 'react';
import { getFavorites, getHistoryPayments, getMe, getViewed } from '@/reducers/user/thunks';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Spinner, SpinnerSizes } from '@/UI/Spinner/Spinner';
import { Link } from '@/UI/Link/Link';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@/constants/routes';
import { getFooterMenu, getNavMenu } from '@/reducers/menu/thunks';
import { baseApi } from '@/api';
import classNames from 'classnames';
import styles from './Cabinet.module.scss';

export const Cabinet = () => {
	const { push, locale } = useRouter();
	const { data, isLoading, viewed, favorites } = useTypedSelector((state) => state.user);
	const { logout } = useTypedActions((state) => state.auth);

	/* временно */
	const USER_INFO = {
		title: '30 дней за',
		price: '12€',
		desc: 'Следующая оплата 22.09.22',
	};

	const USER_TABS = [
		{ txt: 'Настройки', content: <Settings data={data} /> },
		{ txt: 'Избранное', content: <Favourites favorites={favorites?.items!} /> },
		{ txt: 'История покупок', content: <Purchases /> },
		{ txt: 'История просмотров', content: <Views viewed={viewed?.items!} /> },
	];

	const dispatch = useAppDispatch();

	const fetchData = async () => {
		await baseApi.setLang(locale as string);

		await dispatch(getNavMenu());

		await dispatch(getFooterMenu());

		const {
			payload: { id },
		} = await dispatch(getMe());

		await dispatch(getHistoryPayments(id as number));

		await dispatch(getViewed());

		await dispatch(getFavorites());
	};

	const logoutUser = async () => {
		// await axios.get('/session/logout');

		logout();
		push(RoutesEnum.Home);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isAuth = Boolean(
				localStorage.getItem('zabar_user_id') &&
					localStorage.getItem('zabar_user_id') !== 'undefined'
			);

			isAuth ? fetchData() : push(RoutesEnum.Home);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.top}>
					<div className={styles.left}>
						<Avatar name={data.first_name} />
						<div className={styles.text}>
							<h1 className={styles.name}>{data.first_name}</h1>
							<span className={styles.mail}>
								<MailIcon />
								<span className={styles.mailText}>{data.email}</span>
							</span>
							<Link onClick={logoutUser} className={styles.logout} as={'button'}>
								Выйти
							</Link>
						</div>
					</div>
					{/* <SubscribeInfo info={USER_INFO} /> */}
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
