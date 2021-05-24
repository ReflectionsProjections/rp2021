import React, { useState, useEffect } from 'react';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import styles from './SpeakerCard.module.scss';
import { getQueryObject } from '../../../lib/path';

const SpeakerCard = ({ name, cardImage, tagline, badge }) => {
  const [hrefObj, setHrefObj] = useState(undefined);
  useEffect(() => {
    if (hrefObj === undefined) {
      setHrefObj({
        pathname: '/speaker',
        query: {
          ...getQueryObject(window),
          name
        }
      });
    }
  });

  const badgeJSX = badge ? <Badge variant="primary">{badge}</Badge> : null;

  return (
      <Card className={styles.speakerCard} key={name}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImage} />
        <Card.Body>
          <Card.Title className={styles.speakerName}>
            {name}
            <br />
            {badgeJSX}
          </Card.Title>
          <Card.Text className={styles.speakerTagline}>{tagline}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default SpeakerCard;