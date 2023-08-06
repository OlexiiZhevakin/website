import Title from '@/components/title/Title'
import styles from './page.module.scss'
import { posluhydata } from './data'
import Link from 'next/link'

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
                <Link className={styles.btn} href='#'>Детальніше</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Posluhy