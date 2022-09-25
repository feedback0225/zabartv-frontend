import { useEffect, useRef } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import videojs, { VideoJsPlayer } from 'video.js';
import hotkeys from 'videojs-hotkeys';

export const VideoPlayer = () => {
	const videoRef = useRef(null);
	const playerRef = useRef<VideoJsPlayer | null>(null);

	const { isVisiblePlayer } = useTypedSelector((state) => state.player);

	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = videoRef.current;

			if (!videoElement) return;

			playerRef.current = videojs(videoElement, {
				autoplay: false,
				controls: true,
				responsive: true,
				fluid: false,
				language: 'ru',
				bigPlayButton: false,
				plugins: {
					hotkeys,
				},

				controlBar: {
					volumePanel: {
						inline: false,
					},
					fullscreenToggle: false,
					playToggle: true,
				},
				playbackRates: [0.5, 1, 1.5, 2],

				sources: [
					{
						src: 'https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4',
						type: 'video/mp4',
					},
				],
			});

			playerRef.current.play();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [videoRef]);

	useEffect(() => {
		if (!isVisiblePlayer) playerRef.current?.pause();
	}, [isVisiblePlayer]);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	);
};
