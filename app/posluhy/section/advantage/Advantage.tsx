import Title from '@/app/components/title/Title'
import styles from './Advantage.module.scss'
import Image from 'next/image'

const Advantage = () => {
  return (
    <section className={styles.container}>
      <Title tag='h2'>Якісно розроблений сайт</Title>
      <div className={styles.wrapper}>

        <div className={styles.item}>
          <div className={styles.inner}>
            <div className={styles.content}>
              Збільшіть Продажі
              <Image src='/img/icons/variable.svg' alt='Іконка' width={80} height={80} />
            </div>
            <div className={styles.description}>
              <p className={styles.text}>
                В інтернет-магазині кількість потенційних клієнтів набагато більша, ніж в офлайні
              </p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.inner}>
            <div className={styles.content}>
              Підніме Імідж
              <Image src='/img/icons/wheel.svg' alt='Іконка' width={80} height={80} />
            </div>
            <div className={styles.description}>
              <p className={styles.text}>
                Сайт формує особу компанії, впізнаваність бренду, дає позитивне сприйняття продуктів
              </p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.inner}>
            <div className={styles.content}>
              Підвищить Лояльність
              <Image src='/img/icons/data-analytics.svg' alt='Іконка' width={80} height={80} />
            </div>
            <div className={styles.description}>
              <p className={styles.text}>
                Сайт спрощує комунікацію з клієнтами. Дозволяє зрозуміти, що їм цікаво і важливо
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Advantage