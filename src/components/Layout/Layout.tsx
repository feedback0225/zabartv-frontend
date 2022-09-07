import { FC, PropsWithChildren } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Modals } from '@/components/Modals/Modals';
import classNames from 'classnames';
import styles from './Layout.module.scss';

interface LayoutProps {
	headerVariant?: 'absolute' | 'blur';
	sticky?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	children,
	sticky,
	headerVariant,
}) => {
	return (
		<>
			<div
				className={classNames(
					headerVariant === 'absolute'
						? styles.absolute
						: styles.container,
					sticky && styles.sticky
				)}
			>
				<Header variant={headerVariant} />
				<main className="main">{children}</main>
				<Footer />
			</div>
			<Modals />
		</>
	);
};
