import Terminal from '../../public/components/Terminal';
import Head from 'next/head';
import styles from './page.module.css'; // Import page-specific module
import Link from 'next/link';
import LinktreeIcon from '../../public/icons/LinktreeIcon';

// Note: I am not using '../components/Terminal' styles directly here,
// as the wrapper styles are simple layout rules.

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nemetlan</title>
        <meta name="description" content="Developer profile page." />
      </Head>
      
      {/* Apply the container styles from the new module */}
      <div className={styles.pageContainer}>
        <Terminal />

        <div className={styles.buttonContainer}>
          
            <Link href="/works">
              <button className={styles.button}>Works</button>
            </Link>

            <Link href="/experience">
              <button className={styles.button}>Experience</button>
            </Link>

            <Link href="https://linktr.ee/Nemetlan">
              <button className={styles.button}>
                <LinktreeIcon className={styles.linktreeIcon} />
                Linktree
              </button>
            </Link>
            {/* <Link href="/projects"><button className={styles.button}>Contact</button></Link> */}
          
        </div>

      </div>
    </>
  );
}

