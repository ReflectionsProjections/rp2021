import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div>reflections | projections</div>
      <a id="logo">
        <img src="/logo.png" alt="Reflections|Projections Logo" />
      </a>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <>&times;</> : <>+</>}
      </button>
      <ul data-open={isOpen}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
      </ul>
    </nav>
  );
}
