import Head from 'next/head';
// hooks
import { useTypedActions } from '@/hooks/useTypedActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
//
import classNames from 'classnames';
// components
import { Seasons, Rating, GradeModal, FavoriteButton } from './components';
// components/UI
import { Chip } from '@/UI/Chip/Chip';
import { Title } from '@/UI/Title/Title';
import { Button } from '@/UI/Button/Button';
// components/icons
import { PlayIcon } from '@/icons';
// types
import { ICatalog, IOption } from '@/types/index';
// utils
import getShowTimeMovie from '@/utils/getShowTimeMovie';
import axios from '@/utils/axios';
//
import styles from './Movie.module.scss';
import { useRouter } from 'next/router';

export const Movie = () => {
	const { data } = useTypedSelector((state) => state.movie);
	const { openPlayer, setUrl } = useTypedActions((state) => state.player);

	const {
		id,
		content,
		hours,
		type,
		minutes,
		parts,
		options,
		rating,
		img_base_url,
		img_path,
		catalogs,
		stat_url,
		stream_film_link,
		stream_trailer_link,
	}: any = {
		...data[0],
	};
	const { push } =useRouter()
	const categories = catalogs?.map((cat: ICatalog) => {
		return cat.content.title_in_nav;
	});

	const image = `${img_base_url}/${img_path}`;

	const watchMovie = () => {
		if (parts && parts.length > 0) {
			const { stream_film_link } = parts[0]?.season_data[0];
			setUrl(stream_film_link);
		} else {
			addMovieToViewed();
			if (stat_url) {
				push(stat_url)
			} else {
				setUrl(stream_film_link);
			}
		}
		openPlayer(true);
	};

	const watchTrailer = () => {
		openPlayer(true);
		setUrl(stream_trailer_link);
	};

	const addMovieToViewed = async () => {
		try {
			await axios.get('/items/updateviewed', {
				params: {
					film_id: id,
				},
			});
		} catch (e: unknown) {
			console.error(e);
		}
	};

	return (
		<>
			<section className={styles.section}>
				<Head>
					<title>{content?.title}</title>
					<meta name="description" content={content?.seo_description} />
					<meta name="keywords" content={content?.seo_keywords} />
					<meta property="og:description" content={content?.seo_description} />
				</Head>
				<div style={{ backgroundImage: `url(${image})` }} className={styles.top}>
					<div className={classNames('container', styles.content)}>
						<Title className={styles.title}>{content?.title}</Title>
						<div className={styles.chips}>
							{categories?.map((chip: any) => (
								<Chip key={chip} className={styles.chip}>
									{chip}
								</Chip>
							))}
						</div>
						<div className={styles.info}>
							{/* displayed if there is a clock and the type is not equal to 6 */}
							{hours !== 0 && type !== 6 && (
								<span className={styles.infoItem}>
									{getShowTimeMovie(hours, minutes)}
								</span>
							)}

							{/* shown if there are only minutes and the type is not equal to 6 */}
							{hours === 0 && minutes && type !== 6 && (
								<span className={styles.infoItem}>
									{getShowTimeMovie(hours, minutes)}
								</span>
							)}

							{options?.map((option: IOption) => (
								<span key={option.filter_id} className={styles.infoItem}>
									{option.option_value}
								</span>
							))}
						</div>
						<div
							className={styles.desc}
							dangerouslySetInnerHTML={{ __html: content?.text ? content?.text : '' }}
						></div>
						<Rating className={styles.rating} rating={Number(rating).toFixed(1)} />
						<div className={styles.btns}>
							<Button
								// disabled={!stream_film_link}
								onClick={watchMovie}
								className={styles.btn}
								icon={<PlayIcon />}
							>
								Смотреть
							</Button>
							{stream_trailer_link && (
								<Button
									// disabled={!stream_trailer_link}
									onClick={watchTrailer}
									className={styles.btn}
									variant="dark"
								>
									Трейлер
								</Button>
							)}
							<FavoriteButton />
						</div>
					</div>
				</div>
				{parts?.length ? <Seasons parts={parts} /> : null}
			</section>
			{/* <GradeModal /> */}
		</>
	);
};
