import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import classNames from 'classnames';
import styles from './Player.module.scss';

export const Player = () => {
	const open = false;

	return (
		<div className={classNames(styles.wrapper, open && styles.show)}>
			<ButtonBase className={styles.close}>
				<CloseIcon />
			</ButtonBase>
		</div>
	);
};
