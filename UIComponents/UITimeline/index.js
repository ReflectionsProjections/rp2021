import React from 'react';
import classNames from 'classnames';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import styles from 'styles.scss';

export const UITimeline = ({ children }) => (
  <div className={classNames('pt-2 pb-5')}>{children}</div>
);

UITimeline.Title = ({ children }) => (
  <h3 className={classNames('text-center', styles.title)}>{children}</h3>
);

UITimeline.Body = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export const UITimelineEvent = ({ children }) => (
  <Row className={styles.event}>{children}</Row>
);

UITimelineEvent.Time = ({ children }) => (
  <Col
    xs={{ span: 10, offset: 2 }}
    sm={{ span: 10, offset: 2 }}
    md={{ span: 10, offset: 2 }}
    lg={{ span: 4, offset: 0 }}
  >
    <div className={classNames('text-muted pt-1', styles.eventTime)}>
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
    <div className={classNames('pt-1', styles.eventBody)}>{children}</div>
  </Col>
);