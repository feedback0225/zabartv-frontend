import { RoutesEnum } from '@/constants/routes';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { NextLink } from '@/components/NextLink/NextLink';
import classNames from 'classnames';
import styles from './Nav.module.scss';

interface NavProps {
	className?: string;
}

export const Nav: FC<NavProps> = ({ className }) => {
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
		<nav className={classNames(styles.nav, className)}>
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
	);
};
