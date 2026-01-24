// app/layout.js
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css'; // Imports the CSS file created below
import styles from './page.module.css'
import { mc_Samthing } from '../../public/fonts/fonts';
import Link from 'next/link';

// Configure Google Fonts using Next.js built-in font loader
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Custom CSS variable for Inter font
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono', // Custom CSS variable for Fira Code font
});

// Defines the metadata for the page (replaces <title> and other head tags)
export const metadata = {
  title: 'Nemetlan',
  description: 'A developer portfolio using a terminal-style interface.',
};

// Main Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        Apply font classes to the body.
        The `variable` names defined above are used in `globals.css`
      */}
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <Link href='/'><p className={`${mc_Samthing.className} ${styles.Username}`}>#Nemetlan</p></Link>
        {children}
      </body>
    </html>
  );
}