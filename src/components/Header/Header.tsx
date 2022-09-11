import { Nav, ThemeToggle, Lang, Actions, Search, Menu, Burger } from './components/index';
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton';
import { NextLink } from '@/components/NextLink/NextLink';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { FC } from 'react';
import { LogoIcon } from '@/icons';

interface HeaderProps {
	absoluteHeader?: boolean;
	blurHeader?: boolean;
	variant?: 'absolute' | 'blur';
}

export const Header: FC<HeaderProps> = ({ variant }) => {
	return (
		<header
			className={classNames(
				styles.header,
				variant === 'absolute' && styles.absolute,
				variant === 'blur' && styles.blur
			)}
		>
			<div className={classNames('container', styles.container)}>
				<NextLink href="/">
					<a className={styles.logo}>
						<LogoIcon />
					</a>
				</NextLink>
				<Nav className={styles.nav} />
				<div className={styles.right}>
					<Actions />
					<Search className={styles.search} />
					<SubscribeButton className={styles.btn} />
					<Burger />
				</div>
				<Lang />
				<ThemeToggle className={styles.toggle} />
			</div>
			<Menu />
		</header>
	);
};
