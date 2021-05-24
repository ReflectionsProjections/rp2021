import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from '../../UIComponents/Section';

import styles from './about.module.scss';

const About = () => (
  <Section className={styles.aboutSection}>
    <Section.Header>
      <Section.Title>About</Section.Title>
    </Section.Header>
    <Section.Body>
      <Container>
        <Row>
          <Col
            className="mb-5 px-lg-3"
            md={{
              span: 10,
              offset: 1
            }}
          >
            <div className="pb-4">
              <h3>What is Reflections | Projections?</h3>
              <p>
                Reflections | Projections is an annual technology conference
                held at the University of Illinois at Urbana-Champaign. Inviting
                premier speakers, influencers, and companies, it features a
                puzzle competition, speaker events, and a 24-hour AI hackathon.
                Reflections | Projections is coming on its 27th anniversary this
                year, upholding its standards of excellence.
              </p>
            </div>
            <div className="pb-4">
              <h3>Our Team</h3>
              <p>
                We are students passionate about technology who embody the
                diversity and excellence inherent at the University of Illinois
                at Urbana-Champaign. We bring industry and academia into one
                conference to incite the spread of novel ideas. We connect
                students with professional opportunities. We host a one of a
                kind AI hackathon. And, we can&apos;t wait for you to come to
                R|P 2021!
              </p>
            </div>
            <div className="pb-4">
              <h3>MechMania</h3>
              <p>
                MechMania is a 24 hr AI Hackathon where participants write a bot that plays a game! The staff has spent the past year writing a game and are challenging you to win it all. Anyone is free to participate at any point during the 24 hours, no extra applications or registrations necessary. Just show up! You can participate solo, or as a group of up to four! MechMania is open to all skill levels of coding, and in the past couple of years, we have had multiple freshmen place in the top few teams! We provide you with starter code in Java and Python. No experience with ML, AI or Deep Learning is required to participate. The point is for you to have fun, and to write something that you will be proud of at the end of the 24 hrs. Throughout the event, staff will always be available for you to ask questions about code or the game itself. Everything is completely virtual, you can be in the comfort of your own bed and participate too! What is the game? You'll just have to join us on Friday September 25th at 8 PM to find out, won't you? 😉 (btw, there will be prizes awarded to the top 3 teams too!)
              </p>
              <p>
                Please feel free to contact angiesc2@illinois.edu if you have any other questions!
              </p>
              <p>
                Preregistration is currently open at <a href="https://docs.google.com/forms/d/e/1FAIpQLScaHV4dPpOYCxWQ-Mur8T9T5gg7L8lhUbXBqu4c3aZnU6hWqQ/viewform">tinyurl.com/mm26registration</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Section.Body>
  </Section>
);

export default About;