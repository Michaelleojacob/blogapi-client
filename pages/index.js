import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>michaelleojacob.blogapi.homepage</title>
        <meta name='description' content='blogapi' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
