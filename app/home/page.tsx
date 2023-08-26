import Title from '@/app/components/title/Title'
import styles from './page.module.scss'
import Button from '@/app/components/button/Button'


const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Title className={styles.title} tag={'h1'}>
          Створення та просування <span>сайтів під ключ</span>
        </Title>
        <p className={styles.subtitle}>
          Закрийте питання з клієнтами раз і назавжди
        </p>
        <p className={styles.text}>
          Робимо красиві та сучасні сайти для залучення клієнтів у ваш бізнес
        </p>
        <Button>Залишити заявку</Button>
      </div>
    </section>
  )
}

export default HomePage