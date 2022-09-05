import { FavouritesItem } from './components/FavouritesItem/FavouritesItem';
import styles from './Favourites.module.scss'

export const Favourites = () => {

    const data = [
      {
        href: '/movie',
        image: "/movie.jpg",
        id: 1,
        type: "Сериал",
        title: "RRR"
      },
      {
        href: '/movie',
        image: "/movie.jpg",
        id: 2,
        type: "Фильм",
        title: "Молодой человек"
      },
      {
        href: '/movie',
        image: "/movie.jpg",
        id: 1,
        type: "Сериал",
        title: "RRR"
      },
      {
        href: '/movie',
        image: "/movie.jpg",
        id: 2,
        type: "Фильм",
        title: "Молодой человек"
      },
    ];

    return (
        <div className={styles.grid}>
            {data.map(item => (
                <FavouritesItem key={item.id} item={item} />
            ))}
        </div>
    )
}