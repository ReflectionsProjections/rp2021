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
  <Section>
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
              ideas, connect students with professional opportunities, and host
              a one of a kind AI hackathon.
            </AboutSection.Body>
            <AboutSection.Body>
              This year, for the 27th anniversary of Reflections|Projections,
              the conference will be held from September 20th till 25th and will
              be focused on the intersection of tech and social good. Stay tuned
              for updates regarding our various speakers, panels, networking
              events, and MechMania.
            </AboutSection.Body>

            <AboutSection.Title>Our Team</AboutSection.Title>
            <AboutSection.Body>
              We are students passionate about technology who embody the
              diversity and excellence inherent at the University of Illinois at
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
              approach the conference dates, we will publish the specific
              details of each event. Please remember that masks should be worn
              at all times to any in-person events, as we want to do our part in
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
              MechMania is a 24 hr AI Hackathon where participants write a bot
              that plays a game! The staff has spent the past year writing a
              game and are challenging you to win it all. Anyone is free to
              participate at any point during the 24 hours, no extra
              applications or registrations necessary. Just show up! You can
              participate solo, or as a group of up to four! MechMania is open
              to all skill levels of coding, and in the past couple of years, we
              have had multiple freshmen place in the top few teams! We provide
              you with starter code in Java and Python. No experience with ML,
              AI or Deep Learning is required to participate. The point is for
              you to have fun, and to write something that you will be proud of
              at the end of the 24 hrs. Throughout the event, staff will always
              be available for you to ask questions about code or the game
              itself. Everything is completely virtual, you can be in the
              comfort of your own bed and participate too! What is the game?
              You'll just have to join us on Friday September 24th at 12 PM to
              find out, won't you? 😉 (btw, there will be prizes awarded to the
              top 3 teams too!)
            </AboutSection.Body>
            <AboutSection.Body>
              Please feel free to contact{' '}
              <a href="mailto:angiesc2@illinois.edu">
                angiesc2 [at] illinois [dot] edu
              </a>{' '}
              if you have any other questions! Pre-Registration is currently
              open <a href="https://tinyurl.com/mm26registration">here</a>.
              Also, you can join our discord which contains up to date
              announcements about the hackathon{' '}
              <a href="https://discord.gg/KfwrcqV">here</a>.
            </AboutSection.Body>
          </AboutSection>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default About;
