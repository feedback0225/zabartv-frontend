// src={`https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4`}
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useLockedBody } from 'usehooks-ts';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useEffect } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import classNames from 'classnames';
import styles from './Player.module.scss';

export const Player = () => {
	const { isVisiblePlayer } = useTypedSelector((state) => state.player);
	const { openPlayer } = useTypedActions((state) => state.player);
	const { height } = useWindowSize();

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => event.code === 'Escape' && openPlayer(false);

		document.addEventListener('keydown', handleEscapeKey);

		return () => document.removeEventListener('keydown', handleEscapeKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useLockedBody(isVisiblePlayer);

	const handleClosePlayer = () => {
		openPlayer(false);
	};

	return (
		<div
			style={{ height: `${height}px` }}
			className={classNames(styles.wrapper, isVisiblePlayer && styles.show)}
		>
			<ButtonBase onClick={handleClosePlayer} className={styles.close}>
				<CloseIcon />
			</ButtonBase>
			<VideoPlayer />
		</div>
	);
};
