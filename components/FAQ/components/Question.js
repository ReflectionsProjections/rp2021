import React from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import styles from './Question.module.css';

const Question = props => {
  const { question, answer, show, handleToggle } = props;
  return (
    <div className="animated fadeInUp">
      <Card
        onClick={() => handleToggle(question)}
        className={styles.questionCard}
      >
        <Card.Body className={styles.questionCardBody}>
          <Card.Title className={styles.questionCardTitle}>
            <Row className="d-sm-none d-none d-md-flex">
              <div>{question}</div>
              <div className={`ml-auto ${styles.arrowRight}`}>
                {show ? <span>&#9650;</span> : <span>&#9660;</span>}
              </div>
            </Row>
            <div
              className={`d-block d-md-none text-center ${styles.questionCardMobile}`}
            >
              <p>{question}</p>
              <p>
                {show ? (
                  <span className={styles.arrowCenter}>&#9650;</span>
                ) : (
                  <span className={styles.arrowCenter}>&#9660;</span>
                )}
              </p>
            </div>
          </Card.Title>
          {show && (
            <Card.Text className={styles.questionCardText}>{answer}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Question;