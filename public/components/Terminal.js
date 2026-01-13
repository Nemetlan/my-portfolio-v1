"use client";

import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import InstagramIcon from '../icons/InstagramIcon';
import BehanceIcon from '../icons/BehanceIcon';
import styles from './Terminal.module.css'; // Import CSS module


import { useState, useRef } from 'react';

const skills = ['React', 'NextJs', 'Node.js', 'JavaScript', 'Python', 'Docker'];

export default function Terminal() {
  // State to store the rotation values
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Reference to the card element
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    // Calculate rotation values (e.g., max 15 degrees)
    // Inverting the x calculation makes the card follow the cursor naturally
    const rotateY = (x - halfWidth) / halfWidth * 8;
    const rotateX = (y - halfHeight) / halfHeight * -8;

    setMousePos({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves the card area
    setMousePos({ x: 0, y: 0 });
  };

  // Dynamically apply the transform style
  const transformStyle = `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`;


  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.terminalContainer} style={{ transform: transformStyle }}>
      {/* Terminal Header */}
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls}>
          <div className={`${styles.controlDot} ${styles.redDot}`} aria-hidden="true"></div>
          <div className={`${styles.controlDot} ${styles.yellowDot}`} aria-hidden="true"></div>
          <div className={`${styles.controlDot} ${styles.greenDot}`} aria-hidden="true"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className={styles.terminalBody}>
        {/* whoami section */}
        <div className={styles.section}>
          <p className={styles.commandLine}>
            <span className={styles.prompt}>$</span>
            <span>whoami</span>
          </p>
          <div className={styles.output}>
            <h1 className={styles.name}>Thilina Jayasekara</h1>
            <p className={styles.title}>Student | Backend & Frontend Developer</p>
          </div>
        </div>

        {/* skills section */}
        <div className={styles.section}>
          <p className={styles.commandLine}>
            <span className={styles.prompt}>$</span>
            <span>skills</span>
          </p>
          <div className={styles.skillsList}>
            {skills.map(skill => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* socials section */}
        <div>
          <p className={styles.commandLine}>
            <span className={styles.prompt}>$</span>
            <span>socials</span>
          </p>
          <div className={styles.socialsLinks}>
            <a href="https://github.com/Nemetlan" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <GitHubIcon className={styles.icon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon className={styles.icon} />
            </a>
            <a href="https://instagram.com/imthilinax" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon className={styles.icon} />
            </a>
            <a href="https://www.behance.net/Nemetlan" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Behance">
              <BehanceIcon className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};