// src={`https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4`}
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useLockedBody } from 'usehooks-ts';
import classNames from 'classnames';
import styles from './Player.module.scss';
import 'video.js/dist/video-js.css';

export const Player = () => {
	const open = false;

	useLockedBody(open);

	return (
		<div className={classNames(styles.wrapper, open && styles.show)}>
			<ButtonBase className={styles.close}>
				<CloseIcon />
			</ButtonBase>
		</div>
	);
};
