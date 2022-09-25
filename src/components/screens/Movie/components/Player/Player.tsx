// src={`https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4`}
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon, FullScreenIcon, ExitFullScreenIcon, PauseIcon, PlayIcon } from '@/icons';
import { useRef } from 'react';
import { useLockedBody } from 'usehooks-ts';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useFullscreen } from 'rooks';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Video } from './components/Video/Video';
import classNames from 'classnames';
import styles from './Player.module.scss';

export const Player = () => {
	const { isVisiblePlayer } = useTypedSelector((state) => state.player);
	const { openPlayer } = useTypedActions((state) => state.player);
	const { height } = useWindowSize();
	const { isFullscreenEnabled, toggleFullscreen } = useFullscreen();
	const playerRef = useRef<HTMLDivElement>(null);

	useLockedBody(isVisiblePlayer);

	return (
		<div
			style={{ height: `${height}px` }}
			className={classNames(styles.wrapper, isVisiblePlayer && styles.show)}
		>
			<Video
				className={styles.video}
				src="https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4"
			>
				{(video, videoState, actions) => {
					const { status, currentTime, buffered, duration, volume, isLoading } = videoState;

					const isPlaying = status === 'playing';

					const handleClosePlayer = () => {
						openPlayer(false);
						actions.pause();
					};

					const togglePlay = () => {
						isPlaying ? actions.pause() : actions.play();
					};

					return (
						<div
							ref={playerRef}
							className={classNames(
								styles.player,
								isFullscreenEnabled && styles.playerFullScreen
							)}
						>
							<ButtonBase
								aria-label="Закрыть"
								title="Закрыть"
								onClick={handleClosePlayer}
								className={styles.close}
							>
								<CloseIcon />
							</ButtonBase>
							{video}
							<ButtonBase
								aria-label="Полноэкранный режим"
								title="Полноэкранный режим"
								onClick={toggleFullscreen}
								className={styles.fullscreen}
							>
								{isFullscreenEnabled ? <ExitFullScreenIcon /> : <FullScreenIcon />}
							</ButtonBase>
							<div className={styles.controlBar}>
								<ButtonBase
									aria-label={isPlaying ? 'Пауза' : 'Смотреть'}
									title={isPlaying ? 'Пауза' : 'Смотреть'}
									onClick={togglePlay}
									className={styles.play}
								>
									{isPlaying ? <PauseIcon /> : <PlayIcon />}
								</ButtonBase>
							</div>
						</div>
					);
				}}
			</Video>
		</div>
	);
};
