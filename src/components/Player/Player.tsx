import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { useEffect } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedActions } from '@/hooks/useTypedActions';
import classNames from 'classnames';
import styles from './Player.module.scss';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

export const Player = () => {
	const { isVisiblePlayer, url } = useTypedSelector((state) => state.player);
	const { openPlayer } = useTypedActions((state) => state.player);

	const handleClosePlayer = () => {
		openPlayer(false);
	};

	useEffect(() => {
		if (isVisiblePlayer) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}, [isVisiblePlayer]);

	return (
		<>
			{isVisiblePlayer && (
				<div
					// ref={playerRef}
					// style={{ height: `${height}px` }}
					className={classNames(
						styles.wrapper,
						// isFullscreenEnabled && styles.playerFullScreen,
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
					<Plyr
						autoPlay
						source={{
							type: 'video',
							sources: [
								{
									src: url,
								},
							],
						}}
						options={{
							controls: [
								'play-large', // The large play button in the center
								'rewind', // Rewind by the seek time (default 10 seconds)
								'play', // Play/pause playback
								'fast-forward', // Fast forward by the seek time (default 10 seconds)
								'progress', // The progress bar and scrubber for playback and buffering
								'current-time', // The current time of playback
								'duration', // The full duration of the media
								'mute', // Toggle mute
								'volume', // Volume control
								'captions', // Toggle captions
								'settings', // Settings menu
								'pip', // Picture-in-picture (currently Safari only)
								'airplay', // Airplay (currently Safari only)
								'fullscreen', // Toggle fullscreen
							],
						}}
					/>
				</div>
			)}
		</>
	);
};
