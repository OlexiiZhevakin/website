import Title from '@/app/components/title/Title'
import styles from './Posluhy.module.scss'
import Link from 'next/link'
import { posluhydata } from '../../data'

const Posluhy = () => {
  return (
    <section className={styles.container}>
      <Title className={styles.title} tag={'h2'}>
        Який тип сайту Вам потрібен?
      </Title>
      <ul className={styles.list}>
        {posluhydata.map((card, id) => (
          <li className={styles.item} key={id}>
            <div className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {card.title}
                </h3>
                <p className={styles.descr}>
                  {card.descr}
                </p>
                <Link className={styles.btn} href={`/posluhy/${card.id}`}>Детальніше</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posluhy