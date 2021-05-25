import React from "react";
import classNames from "classnames";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Section from "./Section";
import styles from "./SponsorSection.module.css";

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
  const { size, images } = props;

  //  Default
  //  Petabyte Tier (Tier 1) Sizes
  let md = 12;
  let lg = 12;

  if (size === "terab") {
    //  Terabyte Teir (Tier 2) Size
    lg = 6;
  } else if (size === "gigab") {
    //  Gigabyte Tier (Tier 3) Size
    md = 6;
    lg = 4;
  } else if (size === "megab") {
    //  Megabyte Tier (Tier 3) Size
    md = 4;
    lg = 3;
  } else if (size === "allTiers") {
    //  All Tiers Size (Startup Tier) Size
    md = 4;
    lg = 3;
  }

  //  Bootstrap 4 has 12 column wide layout
  const LAYOUT_COL_WIDTH = 12;
  return (
    <Col xs={12}>
      <Row>
        {images.map((image, i) => {
          let mdOffset = 0;
          // let mdHalfColumn = false;
          let lgOffset = 0;
          // let lgHalfColumn = false;

          //  Calculate md offset
          const numMdColsInRow = LAYOUT_COL_WIDTH / md;
          if (i % numMdColsInRow === 0 && i > images.length - numMdColsInRow) {
            const numLeft = images.length - i;
            const leftoverSpace = LAYOUT_COL_WIDTH - numLeft * md;
            mdOffset = Math.max(leftoverSpace / 2, 0);
            if (mdOffset !== Math.floor(mdOffset)) {
              mdOffset = Math.floor(mdOffset);
            }
          }

          //  Calculate lg offset
          const numLgInRow = LAYOUT_COL_WIDTH / lg;
          if (i % numLgInRow === 0 && i > images.length - numLgInRow) {
            const numLeft = images.length - i;
            const leftoverSpace = LAYOUT_COL_WIDTH - numLeft * lg;
            lgOffset = Math.floor(Math.max(leftoverSpace / 2, 0));
            if (lgOffset !== Math.floor(lgOffset)) {
              lgOffset = Math.floor(lgOffset);
            }
          }

          return (
            <Col
              xs={{ span: md, offset: mdOffset }}
              sm={{ span: md, offset: mdOffset }}
              md={{ span: md, offset: mdOffset }}
              lg={{ span: lg, offset: lgOffset }}
              key={image.name}
              className={classNames(
                "mb-3 d-flex align-items-center justify-content-center",
                styles.image
              )}
            >
              <a href={image.website}>
                <Image src={image.img} fluid />
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
    <Section>
      <Section.Title className={styles.sponsorTitle}>Sponsors</Section.Title>
      <Section.Body>
        <Container>
          <SponsorGroup>
            <SponsorGroup.Title></SponsorGroup.Title>
            <SponsorGroup.Body>
              {sponsors.tier1 && sponsors.tier1.length > 0 && (
                <div
                  className={classNames({
                    [styles.firstTierSection]: !hasAllTiersSection,
                  })}
                >
                  <ImageViewer size="petab" images={sponsors.tier1} />
                </div>
              )}

              {sponsors.tier2 && sponsors.tier2.length > 0 && (
                <ImageViewer images={sponsors.tier2} size="terab" />
              )}

              {sponsors.tier3 && sponsors.tier3.length > 0 && (
                <ImageViewer images={sponsors.tier3} size="gigab" />
              )}

              {sponsors.tier4 && sponsors.tier4.length > 0 && (
                <ImageViewer images={sponsors.tier4} size="megab" />
              )}
            </SponsorGroup.Body>
          </SponsorGroup>
          <SponsorGroup>
            <SponsorGroup.Title></SponsorGroup.Title>
            <SponsorGroup.Body>
              {hasAllTiersSection && (
                <ImageViewer images={sponsors.allTiers} size="allTiers" />
              )}
            </SponsorGroup.Body>
          </SponsorGroup>
          <SponsorGroup>
            <SponsorGroup.Title>Diversity x Tech</SponsorGroup.Title>
            <SponsorGroup.Body>
              {sponsors.diversity && (
                <>
                  <ImageViewer
                    images={sponsors.diversity.divTier1}
                    size="terab"
                  />
                  <ImageViewer
                    images={sponsors.diversity.divTier2}
                    size="gigab"
                  />
                </>
              )}
            </SponsorGroup.Body>
          </SponsorGroup>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default SponsorSection;
