import React from 'react';
import classNames from 'classnames';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from '../../pages/_app'

export const UITimeline = ({ children }) => (
  <div className="timeline">{children}</div>
  // <div className={classNames('pt-2 pb-5')}>{children}</div>
);

UITimeline.Title = ({ children }) => (
  <h2 className="timelinetitle">{children}</h2>
  // <h2 className={classNames('text-center', styles.title)}>{children}</h2>
);

UITimeline.Body = ({ children }) => (
  <div className="timelinecontainer">{children}</div>
  // <div className={styles.container}>{children}</div>
);

UITimeline.Location = ({ children }) => (
  <div className="timelineeventlocation">{children}</div>
  // <h3 className = {styles.eventLocation}>{children}</h3>
);

export const UITimelineEvent = ({ children }) => (
  <Row className="timelineevent">{children}</Row>
  // <Row className={styles.event}>{children}</Row>
);

UITimelineEvent.Time = ({ children }) => (
  <Col
    xs={{ span: 10, offset: 2 }}
    sm={{ span: 10, offset: 2 }}
    md={{ span: 10, offset: 2 }}
    lg={{ span: 4, offset: 0 }}
  >
    <div className="timelineeventtime">
    {/* <div className={classNames('text-muted pt-1', styles.eventTime)}> */}
      {children}
    </div>
  </Col>
);

UITimelineEvent.Body = ({ children }) => (
  <Col
    xs={{ span: 10, offset: 2 }}
    sm={{ span: 10, offset: 2 }}
    md={{ span: 10, offset: 2 }}
    lg={{ span: 7, offset: 1 }}
  >
    <div className="timelineeventbody">{children}</div>
    {/* <div className={classNames('pt-1', styles.eventBody)}>{children}</div> */}
  </Col>
);