import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import styles from './about.module.scss';

/* About Section Styling */
const AboutSection = ({ children }) => <div className="pb-4">{children}</div>;

AboutSection.Title = ({ children }) => (
  <h3 className={styles.title}>{children}</h3>
);

AboutSection.Body = ({ children }) => <p className={styles.body}>{children}</p>;

const About = () => (
  <Container className={styles.aboutSection}>
    <Row>
      <Col
        className="mb-5 px-lg-3"
        md={{
          span: 10,
          offset: 1,
        }}
      >
        <AboutSection>
          <AboutSection.Title>The Event</AboutSection.Title>
          <AboutSection.Body>
            Reflections|Projections is an annual technology conference held at
            the University of Illinois at Urbana-Champaign. We bring industry
            and academia into one conference to incite the spread of novel
            ideas, connect students with professional opportunities, and host a
            one of a kind AI hackathon.
          </AboutSection.Body>
          <AboutSection.Body>
            This year, for the 27th anniversary of Reflections|Projections, the
            conference will be held from September 20th till 25th and will be
            focused on the intersection of tech and social good. Stay tuned for
            updates regarding our various speakers, panels, networking events,
            and MechMania.
          </AboutSection.Body>

          <AboutSection.Title>Our Team</AboutSection.Title>
          <AboutSection.Body>
            We are students passionate about technology who embody the diversity
            and excellence inherent at the University of Illinois at
            Urbana-Champaign. Our staff comes from a variety of personal and
            professional backgrounds, and our staff comes together to plan and
            organize an event which reflects our dedication to exploring the
            field of tech. Wee can't wait for you to come to
            Reflections|Projections 2021!
          </AboutSection.Body>

          <AboutSection.Title>
            Conference Format + COVID Guidelines
          </AboutSection.Title>
          <AboutSection.Body>
            In order to adhere to university safety guidelines, our conference
            will be held in a hybrid (in-person and virtual) format. As we
            approach the conference dates, we will publish the specific details
            of each event. Please remember that masks should be worn at all
            times to any in-person events, as we want to do our part in
            preventing the spread of the virus.
          </AboutSection.Body>
          <AboutSection.Body>
            We are excited about the opportunity to leverage this hybrid event
            format to make our talks and conference events more accessible to
            people throughout the global CS community, but also allow students
            who are on campus to be able to interact safely with one another.
          </AboutSection.Body>

          <AboutSection.Title>MechMania</AboutSection.Title>
          <AboutSection.Body>
            MechMania is a 24 hour AI hackathon where students team up to write
            a bot that playes a game. Every year, we build a game in secret, and
            challenge you to write the best bot! You can fly solo, or
            participate in a group of up to four. We will have some time before
            the tournament starts for you to find a team and you can re-register
            if you decide to join a team! MechMania open to all skill levels of
            coding. we provide the starter code in Java and Python, and you can
            focus on creating an awesome strategy to beat the other teams' bots
            in our game. No experience in artificial intelligence or machine
            learning is required to participate. In many years past, several
            freshmen have won the top three positions! Oh, and did we mention
            there are prizes for 1st, 2nd, and 3rd place? (To be eligible for
            prizes, you must{' '}
            <a href="https://forms.gle/mBtrb6V121gQex8t9">register here</a>). If
            you want to find out about the game, you'll just have to see us on
            Friday, September 24th at 12:00pm CT.
          </AboutSection.Body>
          <AboutSection.Body>
            If you want to find out more about MechMania, please visit{' '}
            <a href="https://reflectionsprojections.org">
              reflectionsprojections.org
            </a>{' '}
            and <a href="mechmania.io">mechmania.io</a>. Please feel free to
            contact{' '}
            <a href="mailto:angiesc2@illinois.edu">
              angiesc2 [at] illinois [dot] edu
            </a>{' '}
            if you have any other questions. See you soon!
          </AboutSection.Body>
        </AboutSection>
      </Col>
    </Row>
  </Container>
);

export default About;
