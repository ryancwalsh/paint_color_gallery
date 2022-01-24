import type { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

// eslint-disable-next-line max-lines-per-function
const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
        <a href="https://tailwindcss.com/docs/guides/nextjs" className={styles.card}>
          <h2>Tailwind</h2>
          <p className="text-3xl font-bold underline">
            Demo <span className="text-sky-400/100">here</span>
          </p>
          <a href="https://tailwindcss.com/docs/text-color">https://tailwindcss.com/docs/text-color</a>
        </a>
      </div>
    </Layout>
  );
};

export default Home;
