import { useEffect, useLayoutEffect, useRef } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import videojs, { VideoJsPlayer } from 'video.js';
import hotkeys from 'videojs-hotkeys';
import styles from './VideoPlayer.module.scss';

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
					pictureInPictureToggle: false,
					playToggle: true,
				},

				sources: [
					{
						src: 'https://appsignals.coderman.top/stream/index?path=/1/MH4D2psEpK5nt42q5pml-4pxvwe5wjaZ.mp4',
						type: 'video/mp4',
					},
				],
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [videoRef]);

	useEffect(() => {
		isVisiblePlayer ? playerRef.current?.play() : playerRef.current?.pause();
	}, [isVisiblePlayer]);

	// useEffect(() => {
	// 	const iframe = document.getElementsByTagName('iframe')[0];

	// 	iframe.onload = function (e) {
	// 		var iframeDoc2 = iframe.contentWindow.document;
	// 		console.log(iframeDoc2);
	// 	};

	// 	/* const video = iframe?.contentWindow;

	// 	console.log(video?.document?.body); */

	// 	// console.log(iframe);
	// }, []);

	return <iframe src="https://player.facecast.io/chgtrk/" className={styles.iframe} />;
};
