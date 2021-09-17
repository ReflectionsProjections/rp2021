import React from 'react';
import classNames from 'classnames';

import styles from './UIDashboardCard.scss';

const UIDashboardCard = ({ children }) => (
  <div className={classNames('p-3', styles.card)}>{children}</div>
);
export default UIDashboardCard;
