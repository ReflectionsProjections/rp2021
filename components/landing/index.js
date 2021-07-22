import React from 'react';

import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <main className={styles.main}>
        <img src="/logo.png" alt="Reflections Projects Logo" />
        <h1>
          reflections <span className={styles.logoBar}>|</span> projections
        </h1>
        <p>27 years of connecting students with industry</p>
        <h2>September 20-25th, 2021</h2>
      </main>

      <footer className={styles.footer}>
      Sign up&nbsp;
      <a 
        href="https://forms.gle/6oiAoDGN6R99CjP8A"
        rel="noopener noreferrer"
      >
        here
      </a>
      &nbsp;for updates regarding R|P 2021 and to be notified when registration opens! 
        
      </footer>

      <footer className={styles.footer}>
        Questions? Interested in sponsoring?&nbsp;
        <a
          href="mailto:contact@reflectionsprojections.org"
          rel="noopener noreferrer"
        >
          Email us at contact [at] reflectionsprojections.org
        </a>
      </footer>

      <footer className={styles.footer}>
        Visit our old website&nbsp;
        <a
          href="https://2020.reflectionsprojections.org"
          rel="noopener noreferrer"
        >
          here
        </a>
      </footer>
    </div>
  );
}
