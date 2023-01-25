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
import Plyr, { APITypes } from 'plyr-react';
import 'plyr-react/plyr.css';

export const Player = () => {
	const { isVisiblePlayer, url } = useTypedSelector((state) => state.player);
	const { openPlayer } = useTypedActions((state) => state.player);
	const { height } = useWindowSize();
	const { isFullscreenEnabled, toggleFullscreen } = useFullscreen();
	const playerRef = useRef<HTMLDivElement>(null);
	useLockedBody(isVisiblePlayer);

	return (
		<>
			{isVisiblePlayer && (
				<div
					// ref={playerRef}
					style={{ height: `${height}px` }}
					className={classNames(
						styles.wrapper,
						// isFullscreenEnabled && styles.playerFullScreen,
						isVisiblePlayer && styles.show
					)}
				>
					<Plyr
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
								// 'play-large', // The large play button in the center
								// 'restart', // Restart playback
								'rewind', // Rewind by the seek time (default 10 seconds)
								'play', // Play/pause playback
								'fast-forward', // Fast forward by the seek time (default 10 seconds)
								'progress', // The progress bar and scrubber for playback and buffering
								// 'current-time', // The current time of playback
								'duration', // The full duration of the media
								'mute', // Toggle mute
								'volume', // Volume control
								// 'captions', // Toggle captions
								'settings', // Settings menu
								// 'pip', // Picture-in-picture (currently Safari only)
								// 'airplay', // Airplay (currently Safari only)
								// 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
								'fullscreen', // Toggle fullscreen
							],
						}}
					/>
				</div>
			)}
		</>
	);
};
