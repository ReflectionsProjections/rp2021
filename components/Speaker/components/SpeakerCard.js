import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import styles from './SpeakerCard.module.scss';

const SpeakerCard = ({ name, cardImage, tagline, badge, bio }) => {
  return (
    <div className={styles.speakerCard} key={name}>
      <Row style={{ width: '100%' }}>
        <Col sm={2}>
          <div className={styles.imageContainer}>
            <div className={styles.gradientCircle}>
              <Image className={styles.cardImage} src={cardImage} fluid />
            </div>
          </div>
        </Col>
        <Col sm={10}>
          <div className={styles.text}>
            <div>
              <h5 className={styles.speakerName}>{name}</h5>
              <h6 className={styles.speakerTagline}>{tagline}</h6>
            </div>
            <div variant="outline-primary" className={styles.bio} size="sm">
              <details>
                <summary>Background</summary>
                {ReactHtmlParser(bio)}
              </details>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpeakerCard;
