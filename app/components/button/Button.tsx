import styles from './Button.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({children, className, onClick}: Props) => {
  return (
    <button className={`${styles.button} ${className || ''}`}
            onClick={onClick}>
      {children}
    </button>
  )
}

export default Button