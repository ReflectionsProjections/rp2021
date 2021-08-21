import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from '../Section';

import QuestionContainer from './components/QuestionContainer';

import styles from './FAQ.module.scss';

const FAQ = ({ faqData: { sections } }) => {
  const [currSection, setCurrSection] = useState('General');
  const [currQuestion, setCurrQuestion] = useState('');

  const handleToggle = (question) => {
    const newCurrQuestion = question === currQuestion ? '' : question;
    setCurrQuestion(newCurrQuestion);
  };

  const currQuestions =
    sections.filter((section) => section.name === currSection)?.[0]
      ?.questions ?? [];

  return (
    <Section>
      <style type="text/css">
        {`
          .btn-navButton {
            font-family: var(--font-family);
            background-color: var(--yellow-3);
            color: var(--black-text);
            font-size: 120%;
            margin-top: 0.5em;
            padding: 0.5em;
            margin-bottom: 0.5em;
            width: 100%;
            border-radius: 5px;
          }

          .btn-navButton:focus,
          .btn-navButton:hover,
          .btn-navButton:active,
          .btn-navButton.active {
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
          ></Col>

          <MediaQuery minWidth={767.98}>
            <Row>
              <Col xs="3">
                {sections.map(({ name }) => (
                  <Button
                    key={name}
                    variant="navButton"
                    className={currSection === name ? 'active' : ''}
                    onClick={() => setCurrSection(name)}
                  >
                    {name}
                  </Button>
                ))}
              </Col>
              <Col>
                <QuestionContainer
                  questions={currQuestions}
                  currQuestion={currQuestion}
                  handleToggle={handleToggle}
                />
              </Col>
            </Row>
          </MediaQuery>
          <MediaQuery maxWidth={767.98}>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  size="lg"
                  id="faq-dropdown"
                  variant="secondary"
                  className={styles.faqDropdown}
                >
                  {currSection}
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.faqDropdownMenu}>
                  {sections.map(({ name }) => (
                    <Dropdown.Item
                      key={name}
                      className={styles.faqDropDownButton}
                      onClick={() => setCurrSection(name)}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Row>
              <QuestionContainer
                questions={currQuestions}
                currQuestion={currQuestion}
                handleToggle={handleToggle}
              />
            </Row>
          </MediaQuery>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default FAQ;
