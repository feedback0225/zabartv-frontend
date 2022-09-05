import { Grid } from '../Grid/Grid';
import { MovieItem } from '../index';

export const Views = () => {

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
        <Grid>
          {data.map(item => (
              <MovieItem key={item.id} item={item} />
          ))}
        </Grid>
    )
}