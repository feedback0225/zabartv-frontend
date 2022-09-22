import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useLockedBody } from 'usehooks-ts';
import { RoutesEnum } from '@/constants/routes';
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton';
import NextLink from 'next/link';
import { ThemeToggle, Lang } from '../index';
import classNames from 'classnames';
import styles from './Menu.module.scss';

export const Menu = () => {
	const { isOpened } = useTypedSelector((state) => state.menu);
	const { showMenu } = useTypedActions((state) => state.menu);
	const { height } = useWindowSize();

	const handleClose = () => showMenu(false);

	useLockedBody(isOpened);

	const items = [
		{ href: RoutesEnum.Humor, text: 'Юмор' },
		{ href: RoutesEnum.Music, text: 'Музыка' },
		{ href: RoutesEnum.Cartoons, text: 'Мультфильмы' },
		{ href: RoutesEnum.Tv, text: 'Тв' },
		{ href: RoutesEnum.Films, text: 'Фильмы' },
		{ href: RoutesEnum.Series, text: 'Сериалы' },
		{ href: RoutesEnum.New, text: 'New' },
	];

	return (
		<div
			style={{ height: `${height}px` }}
			className={classNames(styles.menu, isOpened && styles.opened)}
		>
			<div className={styles.container}>
				<div className={styles.top}>
					<ThemeToggle className={styles.toggle} />
					<Lang />
					<ButtonBase onClick={handleClose} className={styles.close}>
						<CloseIcon />
					</ButtonBase>
				</div>
				<nav className={styles.nav}>
					<ul className={classNames('list-reset', styles.list)}>
						{items.map((el) => (
							<li key={el.text} className={styles.item}>
								<NextLink href={el.href}>
									<a className={styles.link}>{el.text}</a>
								</NextLink>
							</li>
						))}
					</ul>
				</nav>
				<SubscribeButton className={styles.btn} />
			</div>
		</div>
	);
};
