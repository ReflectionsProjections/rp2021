import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import Button from 'react-bootstrap/Button';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.wordmark}>
          <Link href="/">reflections|projections</Link>
        </div>
        <a id="logo">
          <Link href="/">
            <img src="/logo.png" alt="Reflections|Projections Logo" />
          </Link>
        </a>
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <>&times;</> : <>+</>}
        </button>
        <ul data-open={isOpen}>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/speakers">Speakers</Link>
          </li>
          <li>
            <a
              className={styles.ctaLink}
              href="https://airtable.com/shrTGIqGrMhlD32NC"
            >
              <Button>Register</Button>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.navSpacer}></div>
    </>
  );
}
