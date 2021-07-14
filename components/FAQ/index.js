import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from '../../UIComponents/Section';

import QuestionContainer from './components/QuestionContainer';

import styles from './FAQ.module.scss';

const FAQ = ({ faqData: { sections } }) => {
  const [currSection, setCurrSection] = useState('General');
  const [currQuestion, setCurrQuestion] = useState('');

  const handleToggle = question => {
    const newCurrQuestion = question === currQuestion ? '' : question;
    setCurrQuestion(newCurrQuestion);
  };

  const currQuestions = sections.filter(
    section => section.name === currSection
  )[0].questions;
  
  return (
    <Section>
      <style type="text/css">
        {`
          .btn-navButton {
            background-color: var(--yellow-3);
            color: var(--black-text);
            font-size: 120%;
            margin-top: 0.5em;
            padding: 0.5em;
            margin-bottom: 0.5em;
            width: 100%;
            margin-right: 50em;
          }
          .btn-navButton:focus,
          .btn-navButton:hover,
          .btn-navButton:active {
            background-color: var(--yellow-1);
          }
        `}
      </style>

      <Section.Header>
        <Section.Title>FAQ</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Col
            md={{ span: 6, offset: 3 }}
            className={`text-center ${styles.faqPrompt}`}
          >
            


          </Col>
          <Row>
            <Col xs="3">
              <Button variant="navButton" onClick={() => setCurrSection('General')}>General</Button>
              <Button variant="navButton" onClick={() => setCurrSection('Events')}>Events</Button>
              <Button variant="navButton" onClick={() => setCurrSection('MechMania')}>MechMania</Button>
              <Button variant="navButton" onClick={() => setCurrSection('PuzzleBang')}>PuzzleBang</Button>
              <Button variant="navButton" onClick={() => setCurrSection('R|P Symposium for Presenters')}>R|P Symposium for Presenters</Button>
              <Button variant="navButton" onClick={() => setCurrSection('R|P Symposium for Schools')}>R|P Symposium for Schools</Button>
              </Col>
          <Col ><QuestionContainer
            questions={currQuestions}
            currQuestion={currQuestion}
            handleToggle={handleToggle}
          /></Col>
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default FAQ;