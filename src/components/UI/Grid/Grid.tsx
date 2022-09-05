import { FC, PropsWithChildren } from 'react'
import { MovieItem } from '@/UI/MovieItem/MovieItem'
import styles from './Grid.module.scss'

interface GridProps {
    //временно
    data: any[]
}

export const Grid: FC<GridProps> = ({data}) => {
    return (
        <div className={styles.grid}>
            {data.map(item => (
                <MovieItem key={item.id} item={item} />
            ))}
        </div>
    )
}