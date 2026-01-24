"use client";

import styles from './ExperienceTabs.module.css'; // Import CSS module
import Link from 'next/link';

export default function ExperienceTabs() {

      return (
    <div className={styles.terminalList}>
            {Experiences.map((item, index) => 
                work(item.title, item.description, item.type, item.since, index)
            )}
                
    </div>
  );
}    

const work = (Title, Description, type, since, key) => {

    return (
        <div className={styles.terminalContainer} key={key}>
        <div className={styles.works}></div>
            <div className={styles.terminalBody}>
                <div className={styles.section}>
                    <div className={styles.workItem}>
                        <p className={styles.workType}>#{since}</p>
                        <span className={styles.prompt}>$ {Title} </span>
                        <div className={styles.DescriptionContainer}>
                            <p className={styles.workDescription}>{Description}</p>
                            <p className={styles.workDescription}>{type}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
}


const Experiences = [
  {
    title: "Content Creator at Siri Thesarana Development Foundation",
    type: 'Editor , Photographer, Videographer, Digital Manager',
    description: "This project was created for PULZ 25 Codeflow, an inter-school web development competition organized by the Ananda College ICT Society.",
    since: "Jan 2024 - Present"
  },   
  {
    title: "Graphic Designer as a Freelancer",
    type: 'Graphic Designer',
    description: "This project was created for PULZ 25 Codeflow, an inter-school web development competition organized by the Ananda College ICT Society.",
    since: "Jan 2023 - Present"
  
  },
]     