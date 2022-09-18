import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useLockedBody } from 'usehooks-ts';
import { RoutesEnum } from '@/constants/routes';
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton';
import { useTranslation } from 'next-i18next';
import { NextLink } from '@/components/NextLink/NextLink';
import { ThemeToggle, Lang } from '../index';
import classNames from 'classnames';
import styles from './Menu.module.scss';

export const Menu = () => {
	const { isOpened } = useTypedSelector((state) => state.menu);
	const { showMenu } = useActions();
	const { height } = useWindowSize();

	const handleClose = () => showMenu(false);

	useLockedBody(isOpened);

	const { t } = useTranslation('common');

	const items = [
		{ href: RoutesEnum.Humor, text: t('menu.humor') },
		{ href: RoutesEnum.Music, text: t('menu.music') },
		{ href: RoutesEnum.Cartoons, text: t('menu.cartoons') },
		{ href: RoutesEnum.Tv, text: t('menu.tv') },
		{ href: RoutesEnum.Films, text: t('menu.films') },
		{ href: RoutesEnum.Series, text: t('menu.series') },
		{ href: RoutesEnum.New, text: t('menu.new') },
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
