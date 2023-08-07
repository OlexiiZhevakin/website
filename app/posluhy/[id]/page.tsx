import Title from '@/components/title/Title'
import styles from './page.module.scss'
import { posluhydata } from '../data'
import { Metadata } from 'next'

type Props = {
  params: {
    id: string
    title: string
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const page = posluhydata.find(page => page.id === params.id)

  if (!page) {
    return {
      title: 'Объект не найден'
    }
  }

  return {
    title: page.title
  }
}

const ServicesPage = ({ params: { id } }: Props) => {
  const page = posluhydata.find(page => page.id === id)
  return (
    <>
      {page ? (
        <section className={styles.container}>
          <Title tag={'h2'}>{page.title}</Title>
          <ul className={styles.list}>
            
          </ul>
        </section>
      ) : (
        <div>Об`єкт не знайден</div>
      )}
    </>
  )
}

export default ServicesPage