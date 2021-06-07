import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import Question from './Question';

const QuestionContainer = ({ questions, currQuestion, handleToggle }) => {

  return (
    <Container>
      {questions.map(q => (
        <Question
          key={q.question}
          question={q.question}
          answer={q.answer}
          show={q.question === currQuestion}
          handleToggle={handleToggle}
        />
      ))}
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