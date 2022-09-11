import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { ThemeToggle } from '../index';
import { useActions } from 'src/hooks/useActions';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useLockedBody } from 'usehooks-ts';
import { MenuLang } from './components/MenuLang/MenuLang';
import { RoutesEnum } from '@/constants/routes';
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton';
import { useTranslation } from 'next-i18next';
import { NextLink } from '@/components/NextLink/NextLink';
import classNames from 'classnames';
import styles from './Menu.module.scss';

export const Menu = () => {
	const { isOpened } = useTypedSelector((state) => state.menuReducer);
	const { showMenu } = useActions();

	const handleClose = () => showMenu(false);

	const { height } = useWindowSize();

	useLockedBody(isOpened);

	const { t } = useTranslation('menu');

	const items = [
		{ href: RoutesEnum.Humor, text: t('humor') },
		{ href: RoutesEnum.Music, text: t('music') },
		{ href: RoutesEnum.Cartoons, text: t('cartoons') },
		{ href: RoutesEnum.Tv, text: t('tv') },
		{ href: RoutesEnum.Films, text: t('films') },
		{ href: RoutesEnum.Series, text: t('series') },
		{ href: RoutesEnum.New, text: t('new') },
	];

	return (
		<div
			style={{ height: `${height}px` }}
			className={classNames(styles.menu, isOpened && styles.opened)}
		>
			<div className={styles.container}>
				<div className={styles.top}>
					<ThemeToggle className={styles.toggle} />
					<MenuLang />
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
