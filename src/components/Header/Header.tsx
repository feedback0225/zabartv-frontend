import {
	Nav,
	ThemeToggle,
	Lang,
	Actions,
	Search,
	Menu,
	Burger,
} from './components/index';
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { FC } from 'react';

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
				<Link href="/">
					<a className={styles.logo}>
						<Image
							priority
							unoptimized
							layout="fill"
							quality={100}
							src="/logo.png"
							alt="ZabarTV"
						/>
					</a>
				</Link>
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
