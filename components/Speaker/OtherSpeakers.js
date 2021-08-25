import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from '../../UIComponents/Section';

import SpeakerCard from './components/SpeakerCard';

import styles from './Speaker.module.scss';

const Speaker = ({ speakers }) => {
  return (
    <Section className="speaker-section" minHeight={false}>
      <Section.Header>
        <Section.Title>Other Speakers</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row>
            {speakers.length === 0 ? (
              <h4>Loading...</h4>
            ) : (
              <>
                {speakers.map(speaker => {
                  const { name, image, tagline, badge } = speaker;
                  const imageURL = `${image}.png`;
                  return (
                    <Col
                      className={styles.speakerCardContainer}
                      xs={12}
                      sm={12}
                    >
                      <SpeakerCard
                        name={name}
                        cardImage={imageURL}
                        tagline={tagline}
                        badge={badge}
                      />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Speaker;