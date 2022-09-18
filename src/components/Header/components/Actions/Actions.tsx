import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { ProfileIcon, SearchIcon } from '@/icons';
import { useTypedActions } from '@/hooks/useTypedActions';
import { RoutesEnum } from '@/constants/routes';
import { NextLink } from '@/components/NextLink/NextLink';
import classNames from 'classnames';
import styles from './Actions.module.scss';

export const Actions = () => {
	const isAuth = false;

	const { showAuthModal } = useTypedActions((state) => state.modal);
	const { setVisibleSearch } = useTypedActions((state) => state.search);

	const handleOpenSearch = () => setVisibleSearch(true);

	const handleShowModal = () => showAuthModal(true);

	return (
		<ul className={classNames('list-reset', styles.list)}>
			<li className={styles.item}>
				{isAuth ? (
					<NextLink href={RoutesEnum.Cabinet}>
						<a className={styles.btn}>
							<ProfileIcon />
						</a>
					</NextLink>
				) : (
					<ButtonBase onClick={handleShowModal} className={styles.btn}>
						<ProfileIcon />
					</ButtonBase>
				)}
			</li>
			<li className={styles.item}>
				<ButtonBase onClick={handleOpenSearch} className={styles.btn}>
					<SearchIcon />
				</ButtonBase>
			</li>
		</ul>
	);
};
