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
