import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col, Image } from 'react-bootstrap';

import styles from './SpeakerCard.module.scss';
import { getQueryObject } from '../../../lib/path';

const SpeakerCard = ({ name, cardImage, tagline, badge, bio }) => {
  const [hrefObj, setHrefObj] = useState(undefined);
  useEffect(() => {
    if (hrefObj === undefined) {
      setHrefObj({
        pathname: '/speakers',
        query: {
          ...getQueryObject(window),
          name
        }
      });
    }
  });

  const badgeJSX = badge ? <Badge variant="primary">{badge}</Badge> : null;
  console.log(bio);
  return (
	  
      <div className={styles.speakerCard} key={name}>
		  	<Row style={{display: "flex"}}>
			  <Col sm={2} md={4}>
			  	<div className={styles.imageContainer}> 
					<div className={styles.gradientCircle}>
						<Image className={styles.cardImage} src={cardImage} rounded fluid/>
					</div>
				</div>
			  </Col>
			  <Col sm={10} md={8}>
				<div className={styles.text}>
					<div>
						<h1 className = {styles.speakerName} >
						{name}
						</h1>
						<h3 className={styles.speakerTagline}>{tagline}</h3>
					</div>
					<div className={styles.bio}>
						{ReactHtmlParser(bio)}
					</div>
				</div>
			 </Col>
			</Row>
      </div>
  );
};

export default SpeakerCard;