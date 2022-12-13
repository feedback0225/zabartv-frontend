import { Chip } from '@/UI/Chip/Chip';
import { Title } from '@/UI/Title/Title';
import { PlayIcon } from '@/icons';
import { Button } from '@/UI/Button/Button';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Seasons, Rating, GradeModal, FavoriteButton } from './components';
import { useTypedActions } from '@/hooks/useTypedActions';
import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Movie.module.scss';
import axios from '@/utils/axios';
import Head from 'next/head';

export const Movie = () => {
	const { data } = useTypedSelector((state) => state.movie);
	const { openPlayer } = useTypedActions((state) => state.player);

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
	} = {
		...data[0],
	};

	const categories = catalogs?.map((cat) => {
		return cat.content.title_in_nav;
	});

	const image = `${img_base_url}/${img_path}`;

	const watchMovie = () => {
		openPlayer(true);
		addMovieToViewed();
	};

	const watchTrailer = () => {
		openPlayer(true);
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
							{categories?.map((chip) => (
								<Chip key={chip} className={styles.chip}>
									{chip}
								</Chip>
							))}
						</div>
						<div className={styles.info}>
							{hours && type !== 6 ? (
								<span className={styles.infoItem}>
									{hours} час {minutes} минуты
								</span>
							) : null}
							{options?.map((el) => (
								<span key={el.filter_id} className={styles.infoItem}>
									{el.option_value}
								</span>
							))}
						</div>
						<div
							className={styles.desc}
							dangerouslySetInnerHTML={{ __html: content?.text ? content?.text : '' }}
						></div>
						<Rating className={styles.rating} rating={Number(rating).toFixed(1)} />
						<div className={styles.btns}>
							<Button onClick={watchMovie} className={styles.btn} icon={<PlayIcon />}>
								Смотреть
							</Button>
							<Button onClick={watchTrailer} className={styles.btn} variant="dark">
								Трейлер
							</Button>
							<FavoriteButton />
						</div>
					</div>
				</div>
				{parts?.length ? <Seasons parts={parts} /> : null}
			</section>
			<GradeModal />
		</>
	);
};
