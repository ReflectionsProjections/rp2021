import React from 'react';

import styles from './NavSocialMediaIcon.module.scss';

const NavSocialMediaIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <i className={`fab ${icon} ${styles.icon}`} />
  </a>
);
export default NavSocialMediaIcon;