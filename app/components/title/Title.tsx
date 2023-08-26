import styles from './Title.module.scss'


type Props = {
  children: React.ReactNode
  tag: 'h1' | 'h2' | 'h3'
  className?: string
}

const Title = ({ children, tag, className }: Props) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${styles.h1} ${className || ''}`}>{children}</h1>
    case 'h2':
      return <h2 className={`${styles.h2} ${className || ''}`}>{children}</h2>
    case 'h3':
      return <h3 className={`${styles.h3} ${className || ''}`}>{children}</h3>
    default:
      return <></>
  }
}

export default Title