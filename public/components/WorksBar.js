"use client";

import styles from './WorksBar.module.css'; // Import CSS module
import Link from 'next/link';

export default function WorksBar() {

      return (
    <div className={styles.terminalList}>
            {worksList.map((item, index) => 
                work(item.title, item.description, item.link, item.type, index)
            )}

            <div className={styles.SeeMoreContainer}>
                <p className={styles.SeeMoreText}>...and more works coming soon!</p>
            </div>
                
    </div>
  );
}    

const work = (Title, Description, link, type, key) => {

    return (
        <div className={styles.terminalContainer} key={key}>
        <div className={styles.works}></div>
            <div className={styles.terminalBody}>
                <div className={styles.section}>
                    <div className={styles.workItem}>
                        <p className={styles.workType}>#{type}</p>
                        <span className={styles.prompt}>$ {Title} </span>
                        <div className={styles.DescriptionContainer}>
                            <p className={styles.workDescription}>{Description}</p>
                            <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                <button className={styles.button}>Let&apos;s see</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
}


const worksList = [
  {
    title: "Mali-Hue Website",
    type: 'web development',
    description: "This project was created for PULZ 25 Codeflow, an inter-school web development competition organized by the Ananda College ICT Society.",
    link: "https://github.com/Nemetlan/Mali-Hue-Website-PULZ-25"
  },
  {
    title: "Graphic Designs",
    type: 'graphic design',
    description: "View my Behance portfolio to see selected visual design, branding, and digital projects that reflect my style and craft.",
    link: "https://www.behance.net/Nemetlan"
  },
    {
    title: "My Portfolio Website",
    type: 'web development',
    description: "My portfolio website showcases selected projects that highlight my skills in design and development.",
    link: "https://github.com/Nemetlan/my-portfolio-v1"
  },
  // Add more works as needed
];