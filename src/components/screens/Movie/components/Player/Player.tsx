// src={`https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4`}
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon, FullScreenIcon, ExitFullScreenIcon, PauseIcon, PlayIcon } from '@/icons';
import { useRef, ChangeEvent } from 'react';
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
		<Video
			className={styles.video}
			src="https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4"
		>
			{(video, videoState, actions) => {
				const { status, duration, currentTime, volume, isLoading } = videoState;

				const isPlaying = status === 'playing';

				const handleClosePlayer = () => {
					openPlayer(false);
					actions.pause();
				};

				const onChange = (e: ChangeEvent<HTMLInputElement>) => {
					const { value } = e.target as unknown as { value: number };

					actions.navigate(value);
				};

				function secondsToTime(e: number) {
					const h = Math.floor(e / 3600)
							.toString()
							.padStart(2, '0'),
						m = Math.floor((e % 3600) / 60)
							.toString()
							.padStart(2, '0'),
						s = Math.floor(e % 60)
							.toString()
							.padStart(2, '0');

					return h + ':' + m + ':' + s;
					//return `${h}:${m}:${s}`;
				}

				return (
					<div
						ref={playerRef}
						style={{ height: `${height}px` }}
						className={classNames(
							styles.wrapper,
							isFullscreenEnabled && styles.playerFullScreen,
							isVisiblePlayer && styles.show
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
							<div className={styles.range}>
								<input
									className={styles.input}
									type="range"
									value={currentTime}
									onChange={onChange}
								/>
								<span className={styles.time}>{secondsToTime(duration)}</span>
							</div>
							<ButtonBase
								aria-label={isPlaying ? 'Пауза' : 'Смотреть'}
								title={isPlaying ? 'Пауза' : 'Смотреть'}
								onClick={actions.togglePlay}
								className={styles.play}
							>
								{isPlaying ? <PauseIcon /> : <PlayIcon />}
							</ButtonBase>
						</div>
					</div>
				);
			}}
		</Video>
	);
};
