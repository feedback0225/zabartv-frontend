import { Autoplay } from 'swiper';
import { Carousel } from '@/components/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

export const Hero = () => {
	const items = [
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке1' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке2' },
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке3' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке4' },
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке5' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке6' },
	];

	return (
		<section className={styles.hero}>
			<div className={classNames('container', styles.container)}>
				<Carousel
					prevBtnClass={styles.prev}
					nextBtnClass={styles.next}
					className={styles.slider}
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
				>
					{items.map((el) => (
						<SwiperSlide key={el.alt} className={styles.slide}>
							<Link href={el.href}>
								<a className={styles.item}>
									<Image
										priority
										quality={100}
										src={el.source}
										alt={el.alt}
										layout="fill"
									/>
								</a>
							</Link>
						</SwiperSlide>
					))}
				</Carousel>
			</div>
		</section>
	);
};
