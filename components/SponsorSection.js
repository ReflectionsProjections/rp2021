import React from "react";
import classNames from "classnames";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "./Section";
import styles from "./SponsorSection.module.scss";

/* Sponsor Group */
/* Use this for section styling */
const SponsorGroup = ({ children }) => <div className="mb-5">{children}</div>;

SponsorGroup.Title = ({ children }) => (
  <Row>
    <Col xs={12} className="text-center pb-3">
      <h4 style={{ fontFamily: "Roboto Mono" }}>{children}</h4>
    </Col>
  </Row>
);

SponsorGroup.Body = ({ children }) => <Row>{children}</Row>;

const ImageViewer = (props) => {
  const { images } = props;

  //  Bootstrap 4 has 12 column wide layout
  const LAYOUT_COL_WIDTH = 12;
  return (
    <Col xs={12}>
      <Row>
        {images.map((image) => {
          return (
            <Col
              key={image.name}
              className={classNames(
                "mb-3 d-flex align-items-center justify-content-center",
                styles.image
              )}
            >
              <a href={image.website}>
                <Image src={image.img} width="30%" height="20%" fluid />
              </a>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

const SponsorSection = ({ sponsors }) => {
  const hasAllTiersSection = (sponsors.allTiers || []).length > 0;
  return (
    <div>
      <Section.Title className={styles.sponsorTitle}>Sponsors</Section.Title>
      <Section.Body>
        <Container display="flex" align-items="center" justify-content="center">
          <SponsorGroup>
            <SponsorGroup.Body>
              {sponsors.tier1 && sponsors.tier1.length > 0 && (
                <div
                  className={classNames({
                    [styles.firstTierSection]: !hasAllTiersSection,
                  })}
                >
                  <ImageViewer images={sponsors.tier1} />
                </div>
              )}

              {sponsors.tier2 && sponsors.tier2.length > 0 && (
                <ImageViewer images={sponsors.tier2} />
              )}

              {sponsors.tier3 && sponsors.tier3.length > 0 && (
                <ImageViewer images={sponsors.tier3} />
              )}

              {sponsors.tier4 && sponsors.tier4.length > 0 && (
                <ImageViewer images={sponsors.tier4} />
              )}
            </SponsorGroup.Body>
          </SponsorGroup>
          <SponsorGroup>
            <SponsorGroup.Title></SponsorGroup.Title>
            <SponsorGroup.Body>
              {hasAllTiersSection && <ImageViewer images={sponsors.allTiers} />}
            </SponsorGroup.Body>
          </SponsorGroup>
          <SponsorGroup>
            <SponsorGroup.Body>
              {sponsors.diversity && (
                <>
                  <ImageViewer images={sponsors.diversity.divTier1} />
                </>
              )}
            </SponsorGroup.Body>
          </SponsorGroup>
        </Container>
      </Section.Body>
    </div>
  );
};

export default SponsorSection;
