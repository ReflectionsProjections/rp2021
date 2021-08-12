import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import styles from './about.module.scss';

/* About Section Styling */
const AboutSection = ({ children }) => <div className="pb-4">{children}</div>;

AboutSection.Title = ({ children }) => (
  <h3 className={styles.title}>{ children }</h3>
);

AboutSection.Body = ({ children }) => <p className={styles.body}>{children}</p>;

const About = () => (
  <Section>
    <Container className={styles.aboutSection}>
      <Row>
        <Col
          className="mb-5 px-lg-3"
          md={{
            span: 10,
            offset: 1
          }}
        >
          <AboutSection>
            <AboutSection.Title>The Event</AboutSection.Title>
            <AboutSection.Body>
              Reflections | Projections is an annual technology conference held at the University of Illinois at Urbana-Champaign. 
              Not only does R|P invite premier speakers, influencers, and companies from all over the country, it also features a 
              puzzle hunt, speaker events, and a 24-hour AI hackathon.
            </AboutSection.Body>
            <AboutSection.Body>
              Reflections | Projections is coming up on it’s 28th anniversary this year, continuously upholding its standards of 
              excellence.
            </AboutSection.Body>
          </AboutSection>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default About;
