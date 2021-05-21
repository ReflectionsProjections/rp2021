import React from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a id="logo">
        <img src="/logo.png" alt="Reflections|Projections Logo" />
      </a>
      <ul>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
