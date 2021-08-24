import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import styles from './SpeakerCard.module.scss';
import { getQueryObject } from '../../../lib/path';

const SpeakerCard = ({ name, cardImage, tagline, badge, bio }) => {
  const useMediaQuery = (query, whenTrue, whenFalse) => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia === 'undefined'
    )
      return whenFalse;

    const mediaQuery = window.matchMedia(query);
    const [match, setMatch] = React.useState(!!mediaQuery.matches);

    React.useEffect(() => {
      const handler = () => setMatch(!!mediaQuery.matches);
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }, []);

    return match ? whenTrue : whenFalse;
  };

  const [hrefObj, setHrefObj] = useState(undefined);
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    if (hrefObj === undefined) {
      setHrefObj({
        pathname: '/speakers',
        query: {
          ...getQueryObject(window),
          name,
        },
      });
    }
  });

  const badgeJSX = badge ? <Badge variant="primary">{badge}</Badge> : null;

  const speakerBio = useMediaQuery(
    '(max-width: 599px)',
    `<details>
      <summary>Background</summary>
        ${bio}
    </details>`,
    bio
  );

  return (
    <div className={styles.speakerCard} key={name}>
      <Row style={{ display: 'flex' }}>
        <Col sm={2} md={4}>
          <div className={styles.imageContainer}>
            <div className={styles.gradientCircle}>
              <Image
                className={styles.cardImage}
                src={cardImage}
                rounded
                fluid
              />
            </div>
          </div>
        </Col>
        <Col sm={10} md={8}>
          <div className={styles.text}>
            <div>
              <h1 className={styles.speakerName}>{name}</h1>
              <h3 className={styles.speakerTagline}>{tagline}</h3>
            </div>
            <div variant="outline-primary" className={styles.bio} size="sm">
              {ReactHtmlParser(speakerBio)}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpeakerCard;
