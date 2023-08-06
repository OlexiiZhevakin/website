import Title from '@/components/title/Title'
import styles from './page.module.scss'
import Button from '@/components/button/Button'
import Image from 'next/image'


const HomePage = () => {
  return (
    <section className={styles.container}>
      <Image 
            className={styles.img}
            src='/img/head.jpg' 
            alt='Програмуваня' 
            title='Програмуваня' 
            width={640} 
            height={427} 
            style={{objectFit: 'contain'}}
            priority/>
            
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