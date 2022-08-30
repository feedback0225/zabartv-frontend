import {FC, PropsWithChildren, useRef} from "react";
import {Swiper} from 'swiper/react';
import {SliderButton} from '@/UI/SliderButton/SliderButton';
import SwiperClass, {Navigation} from 'swiper';
import styles from './Carousel.module.scss'
import 'swiper/css';
import classNames from "classnames";

const breakpoints = {
    769: {
        slidesPerView: 3,
    },
    1025: {
        slidesPerView: 4,
    },
}

interface CarouselProps {
    className?: string;
}

export const Carousel: FC<PropsWithChildren<CarouselProps>> = ({className, children}) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const onSwiper = (swiper: SwiperClass) => {
        setTimeout(() => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
        })
    }

    return (
        <div className={classNames(styles.wrapper, className)}>
            <SliderButton className={styles.prev} dir='left' ref={navigationPrevRef}/>
            <SliderButton className={styles.next} dir='right' ref={navigationNextRef}/>
            <Swiper
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={24}
                navigation={navigation}
                onSwiper={onSwiper}
                breakpoints={breakpoints}
                className={styles.slider}
            >
                {children}
            </Swiper>
        </div>
    )
}