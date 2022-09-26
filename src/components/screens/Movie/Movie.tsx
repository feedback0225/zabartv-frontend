import { Chip } from '@/UI/Chip/Chip';
import { Title } from '@/UI/Title/Title';
import { PlayIcon, StarIcon } from '@/icons';
import { Button } from '@/UI/Button/Button';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Player, Rating, Seasons } from './components';
import { useTypedActions } from '@/hooks/useTypedActions';
import classNames from 'classnames';
import styles from './Movie.module.scss';

export const Movie = () => {
	const categories = ['Комедия', 'Фильм'];

	const { data } = useTypedSelector((state) => state.movie);
	const { openPlayer } = useTypedActions((state) => state.player);

	const { content, hours, minutes, parts, options, rating, img_base_url, img_path } = { ...data[0] };

	const image = `${img_base_url}/${img_path}`;

	const handlePlayMovie = () => {
		openPlayer(true);
	};

	return (
		<>
			<section className={styles.section}>
				<div style={{ backgroundImage: `url(${image})` }} className={styles.top}>
					<div className={classNames('container', styles.content)}>
						<Title className={styles.title}>{content?.title}</Title>
						<div className={styles.chips}>
							{categories.map((chip) => (
								<Chip key={chip} className={styles.chip}>
									{chip}
								</Chip>
							))}
						</div>
						<div className={styles.info}>
							<span className={styles.infoItem}>
								{hours} час {minutes} минуты
							</span>
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
							<Button onClick={handlePlayMovie} className={styles.btn} icon={<PlayIcon />}>
								Смотреть
							</Button>
							<Button className={styles.btn} variant="dark">
								Трейлер
							</Button>
							<Button
								className={styles.star}
								variant="dark"
								aria-label="Добавить в избранное"
							>
								<StarIcon />
							</Button>
						</div>
					</div>
				</div>
				<Seasons parts={parts} />
			</section>
			<Player />
		</>
	);
};
