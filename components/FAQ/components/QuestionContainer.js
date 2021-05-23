import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Question from './Question';

const QuestionContainer = ({ questions, currQuestion, handleToggle }) => {
  const mid = Math.ceil(questions.length / 2);
  const left = questions.slice(0, mid);
  const right = questions.slice(mid);
  return (
    <Container>
      <Row>
        <Col md={6}>
          {left.map(q => (
            <Question
              key={q.question}
              question={q.question}
              answer={q.answer}
              show={q.question === currQuestion}
              handleToggle={handleToggle}
            />
          ))}
        </Col>
        <Col md={6}>
          {right.map(q => (
            <Question
              key={q.question}
              question={q.question}
              answer={q.answer}
              show={q.question === currQuestion}
              handleToggle={handleToggle}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

QuestionContainer.defaultProps = {
  currQuestion: ''
};

QuestionContainer.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired,
  currQuestion: PropTypes.string,
  handleToggle: PropTypes.func.isRequired
};

export default QuestionContainer;