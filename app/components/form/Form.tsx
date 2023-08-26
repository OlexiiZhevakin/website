import Title from '../title/Title'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <section className={styles.container}>
      <Title tag={'h2'}>
        Вам потрібен сучасний красивий сайт, який приноситиме клієнтів?
      </Title>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Title tag={'h3'}>Заповніть форму</Title>
          <p className={styles.descriprion}>
            та миттєво отримайте консультацію спеціаліста на розробку Вашого сайту
          </p>
        </div>
        <form className={styles.form} action="#">
          <input className={styles.input} type="text" placeholder='Введіть Ваше им’я' />
          <input className={styles.input} type="tel" placeholder='+3(___) ___ - __ - __ '/>
          <button className={styles.btn} type='submit'>Відправити</button>
        </form>
      </div>
    </section>
  )
}

export default Form