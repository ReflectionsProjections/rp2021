import React from 'react';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

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
          {speakers.length === 0 ? (
            <h4>Loading...</h4>
          ) : (
            <>
              {speakers.map((speaker) => {
                const { name, tagline, badge, bio, image } = speaker;
                const imageURL = `${image}`;
                return (
                  <div className={styles.speakerCardContainer} sm={12} md={6}>
                    <SpeakerCard
                      name={name}
                      cardImage={imageURL}
                      tagline={tagline}
                      badge={badge}
                      key={speaker.name}
                      bio={bio}
                    />
                  </div>
                );
              })}
            </>
          )}
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Speaker;
