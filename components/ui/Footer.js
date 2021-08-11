import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a id="logo">
          <img src="/logo.png" alt="Reflections|Projections Logo" />
        </a>
        <div>reflections | projections</div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
          <span className="social-links">
            <li>
              <a href="#https://twitter.com">T</a>
            </li>
            <li>
              <a href="#facebook">FB</a>
            </li>
            <li>
              <a href="#linkedin">LI</a>
            </li>
          </span>
        </ul>
      </div>
    </footer>
  );
}
