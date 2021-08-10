import React from 'react';



const NavSocialMediaIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <i className={`fab ${icon} "icon"`} />
  </a>
);
export default NavSocialMediaIcon;
