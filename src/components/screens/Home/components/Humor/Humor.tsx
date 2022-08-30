import { Tabs } from '@/components/UI/Tabs/Tabs'
import { Title } from '@/components/UI/Title/Title'
import classNames from 'classnames'
import { HumorCarousel } from './components/HumorCarousel/HumorCarousel'
import styles from './Humor.module.scss'

export const Humor = () => {

    const data = [
        {image: '/movie.jpg', id: 1, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 2, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 3, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 4, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 5, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 6, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 7, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 8, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 9, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 10, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
        {image: '/movie.jpg', id: 11, name: 'RRR', rating: 7.2, genre: 'Комедия', type: 'Фильм', time: '1 час 33 минуты', year: 2022, age: '6+', status: 'Подписка'},
    ]

    const tabs = [
        {txt: 'Сериалы', content: <HumorCarousel data={data} />},
        {txt: 'Скетчи', content: <HumorCarousel data={data} />},
        {txt: 'Шоу', content: <HumorCarousel data={data} />},
    ]
    
    return (
        <section className={styles.humor}>
            <div className={classNames('container', styles.container)}>
                <Title level='h2' size='medium' className={styles.title}>Юмор</Title>
                <Tabs tabs={tabs} />
            </div>
        </section>
    )
}