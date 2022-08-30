import { FC } from "react"
import { Carousel } from "@/components/Carousel/Carousel"
import { MovieItem } from "@/components/UI/MovieItem/MovieItem"
import { SwiperSlide } from "swiper/react"
import styles from './HumorCarousel.module.scss'

interface HumorCarouselProps {
    //временно
    data: any[]
}

export const HumorCarousel: FC<HumorCarouselProps> = ({data}) => {
    return (
        <Carousel>
            {data.map(item => (
                <SwiperSlide className={styles.item} key={item.id}>
                    <MovieItem item={item} />
                </SwiperSlide>
            ))}
        </Carousel>
    )
}