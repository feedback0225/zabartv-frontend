import { FC, PropsWithChildren } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Modals } from '@/components/Modals/Modals';
import classNames from 'classnames';
import styles from './Layout.module.scss';

interface LayoutProps {
	withoutFooter?: boolean;
	headerVariant?: 'absolute' | 'blur';
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	children,
	headerVariant,
	withoutFooter,
}) => {
	return (
		<>
			<div
				className={classNames(
					headerVariant === 'absolute'
						? styles.absolute
						: styles.container
				)}
			>
				<Header variant={headerVariant} />
				<main className="main">{children}</main>
				{!withoutFooter && <Footer />}
			</div>
			<Modals />
		</>
	);
};
