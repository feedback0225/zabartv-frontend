import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { ProfileIcon, SearchIcon } from '@/icons';
import { useActions } from 'src/hooks/useActions';
import { RoutesEnum } from '@/constants/routes';
import { NextLink } from '@/components/NextLink/NextLink';
import classNames from 'classnames';
import styles from './Actions.module.scss';

export const Actions = () => {
	const { setVisibleSearch } = useActions();

	const handleOpenSearch = () => setVisibleSearch(true);

	return (
		<ul className={classNames('list-reset', styles.list)}>
			<li className={styles.item}>
				<NextLink href={RoutesEnum.Cabinet}>
					<a className={styles.btn}>
						<ProfileIcon />
					</a>
				</NextLink>
			</li>
			<li className={styles.item}>
				<ButtonBase onClick={handleOpenSearch} className={styles.btn}>
					<SearchIcon />
				</ButtonBase>
			</li>
		</ul>
	);
};
