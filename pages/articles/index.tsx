import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Menu from '../menu'
import styles from '../../styles/Home.module.css'

export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allArticles = await res.json();
  return {
    props: { allArticles },
  };
}

const Home: NextPage = ({ allArticles }) => {
  console.log('articles ', allArticles[0]._id)
  return (
    <div className={styles.container}>
      <Head>
        <title>Enjoy reading</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn everyday with peoples shared knowledge
        </h1>

        <div className={styles.grid}>
          {allArticles.map((article) => {
            return(
                <a 
                  className={styles.card} key={article._id}
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                >
                  <div>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://picsum.photos/700/700'></img>
                  </div>
                </a>
              ) 
            })
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Rania
        </a>
      </footer>
    </div>
  )
}

export default Home
