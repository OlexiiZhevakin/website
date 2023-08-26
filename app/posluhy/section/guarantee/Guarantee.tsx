import Title from '@/app/components/title/Title'
import styles from './Guarantee.module.scss'

const Guarantee = () => {
  return (
    <section className={styles.container}>
      <Title tag={'h2'}>Ми гарантуємо</Title>
      <div className={styles.wrapper}>
        <div className={styles.number}>
          <div className={styles.item}>
            <span>01</span>
            <p className={styles.text}>
              Фіксовану ціну
            </p>
          </div>
          <div className={styles.item}>
            <span>02</span>
            <p className={styles.text}>
              Дотримання термінів
            </p>
          </div>
          <div className={styles.item}>
            <span>03</span>
            <p className={styles.text}>
              Висока якість
            </p>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            Ціна за проект не зміниться у процесі розробки.
          </p>
          <p>
            Проект завжди буде реалізовано в обумовлений термін.
          </p>
          <p>
            Ми гарантуємо, що Ваш сайт буде унікальним і буде відповідати всім вимогам якісної розробки.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Guarantee