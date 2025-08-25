import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter</title>
        <meta name="description" content="Proyecto básico de Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            ¡Bienvenido a <span className={styles.highlight}>Next.js!</span>
          </h1>
          <p className={styles.description}>
            Comienza editando{' '}
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Documentación &rarr;</h2>
              <p>Aprende sobre las características y API de Next.js.</p>
            </a>
            <a
              href="https://nextjs.org/learn"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Aprende &rarr;</h2>
              <p>¡Aprende Next.js con un tutorial interactivo!</p>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
