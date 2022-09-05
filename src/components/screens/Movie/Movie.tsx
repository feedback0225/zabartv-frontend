import { Button } from '@/components/UI/Button/Button'
import { Chip } from '@/UI/Chip/Chip'
import { Title } from '@/UI/Title/Title'
import { Rating } from './components/Rating/Rating'
import { PlayIcon, StarIcon } from '@/icons'
import classNames from 'classnames'
import styles from './Movie.module.scss'

export const Movie = () => {

  const data = {
    image: '/movie-bg.jpg',
    title: 'Мой папа – вождь',
    categories: ['Комедия', 'Фильм'],
    info: ['1 час 33 минуты', '2022', '6+'],
    description: 'Капитан Петров возвращается из плавания десять лет спустя, но из-за потери памяти он считает себя вождём африканского племени. Теперь ему нужно заново привыкать к цивилизации и завоёвывать доверие близких. Искромётная роль Дмитрия Нагиева в образе неукротимого дикаря с большим сердцем. В звёздную актёрскую команду также вошли Максим Лагашкин, Мария Миронова, Фёдор Добронравов, Роман Мадянов и многие другие.',
    rating: 7.2
  }

  const {image, title, categories, info, description, rating} = data

  return (
    <section className={styles.section}>
      <div style={{backgroundImage: `url(${image})`}} className={styles.top}>
        <div className={classNames('container', styles.content)}>
          <Title className={styles.title}>{title}</Title>
          <div className={styles.chips}>
            {categories.map(chip => (
              <Chip key={chip} className={styles.chip}>{chip}</Chip>
            ))}
          </div>
          <div className={styles.info}>
            {info.map(item => (
              <span key={item} className={styles.infoItem}>
                {item}
            </span>
            ))}
          </div>
          <p className={styles.desc}>{description}</p>
          <Rating className={styles.rating} rating={rating} />
          <div className={styles.btns}>
              <Button
                className={styles.btn}
                icon={<PlayIcon />}
              >
                Смотреть
              </Button>
              <Button
                className={styles.btn}
                variant='dark'
              >
                Трейлер
              </Button>
              <Button
                className={styles.star}
                variant='dark'
              >
                <StarIcon />
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}