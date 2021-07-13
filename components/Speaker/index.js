import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from '../../UIComponents/Section';

import SpeakerCard from './components/SpeakerCard';

import styles from './Speaker.module.scss';

const Speaker = ({ speakers }) => {
  return (
    <Section className="speaker-section">
      <Section.Header>
        <Section.Title>Speakers</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row>
            {speakers.length === 0 ? (
              <h4>Loading...</h4>
            ) : (
              <>
                {speakers.map(speaker => {
                  const { name, tagline, badge, bio, image } = speaker;
                  const imageURL = `${image}`;
                  return (
                    <Col
                      className={styles.speakerCardContainer}
                      sm={12}
                      md={6}
                      lg={4}
                    >
                      <SpeakerCard
                        name={name}
                        cardImage={imageURL}
                        tagline={tagline}
                        badge={badge}
						key={speaker.name}
						bio = {bio}
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