

import Head from 'next/head';
import styles from './page.module.css'; // Import page-specific module
import Link from 'next/link';

import ExperienceTabs from '../../../public/components/ExperienceTabs';


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
        <ExperienceTabs />
        

      </div>
    </>
  );
}