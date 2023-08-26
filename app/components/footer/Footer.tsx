import Link from 'next/link'
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.container}>

        <Link className={styles.logo} href='/'>MyAPP</Link>
        {/* <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} href="#">
              Лендінг
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="#">
              Багатосторінковий
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="#">
              Налаштування реклами
            </Link>
          </li>
        </ul> */}
        <span>
          2023
        </span>

    </footer>
  )
}

export default Footer