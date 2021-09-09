import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import styles from './SponsorSection.module.scss';

/* Sponsor Group */
/* Use this for section styling */
const SponsorGroup = ({ children }) => <div className="mb-5">{children}</div>;

SponsorGroup.Title = ({ children }) => (
  <Row>
    <Col className="text-center pb-3">
      <h4 style={{ fontFamily: 'Roboto Mono' }}>{children}</h4>
    </Col>
  </Row>
);

SponsorGroup.Body = ({ children }) => <Row>{children}</Row>;

const SponsorSection = ({ sponsors }) => {
  const { tier1, tier2, tier3, tier4 } = sponsors;

  return (
    <div className={styles.sponsorSection}>
      <Section>
        <Section.Title>Sponsors</Section.Title>
        <div className={styles.primarySponsor}>
          {sponsors.tier1.map((sponsor, idx) => (
            <a
              key={`${sponsor.name}-${idx}`}
              href={sponsor.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={sponsor.img} />
            </a>
          ))}
        </div>

        <div className={styles.sponsorGrid}>
          {sponsors.tier2.map((sponsor, idx) => (
            <a
              key={`${sponsor.name}-${idx}`}
              href={sponsor.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={sponsor.img} />
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SponsorSection;
