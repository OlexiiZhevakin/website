'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useState, useEffect } from 'react'

const links = [
  {
    id: 1,
    title: 'Головна',
    url: '/'
  },
  {
    id: 2,
    title: 'Портфоліо',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Послуги',
    url: '/posluhy'
  },
  {
    id: 4,
    title: 'Про нас',
    url: '/pro-nas'
  },
  {
    id: 5,
    title: 'Контакти',
    url: '/kontakty'
  }
]


const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isBtnActive, setIsBtnActive] = useState(false)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsBtnActive(!isBtnActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    setIsBtnActive(false);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMenuActive) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }
    }
  }, [isMenuActive]);

  return (
    <header className={styles.container}>
      <div className={`${styles.blur} ${isMenuActive ? styles.active : ''}`}/>
      <div className={`${styles.burger} ${isBtnActive ? styles.btnActive : ''}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <nav className={`${styles.nav} ${isMenuActive ? styles.active : ''}`}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li className={styles.item} key={link.id}>
              <Link className={styles.link} href={link.url} onClick={closeMenu}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className={styles.logo} href="/">
        MyAPP
      </Link>
      <a className={styles.tel} href="tel:+380000000000">+38(000)000-00-00</a>
    </header>
  );
};export default Header