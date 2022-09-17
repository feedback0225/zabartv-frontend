import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Title } from '@/UI/Title/Title';
import { SubscribeCard } from './components/SubscribeCard/SubscribeCard';
import styles from './Subscribe.module.scss';
import classNames from 'classnames';

export const Subscribe = () => {
	const { data } = useTypedSelector((state) => state.subscribe);

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>Подиска ZabarTV</Title>
				<p className={styles.desc}>
					Покажем уникальные сериалы и фильмы. Подберем кино по интересам и настроению. Для вас
					и вашей семьи.
				</p>
				<div className={styles.cards}>
					{data?.map((card) => (
						<SubscribeCard key={card.id} card={card} />
					))}
				</div>
			</div>
		</section>
	);
};
