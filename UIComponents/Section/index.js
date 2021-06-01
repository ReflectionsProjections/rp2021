import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from 'react-bootstrap/Container';

// import styles from 'Section.scss';

const Section = ({ children, minHeight = true }) => (
  <Container>
    <section
      className={classNames(styles.section, { [styles.minHeight]: minHeight })}
    >
      <Container>{children}</Container>
    </section>
  </Container>
);

Section.Title = ({ children }) => <h1 className={styles.title}>{children}</h1>;

Section.Subtitle = ({ children }) => (
  <h2 className={styles.subtitle}>{children}</h2>
);

Section.Body = ({ children }) => <div className={styles.body}>{children}</div>;

Section.Header = ({ children, className, ...rest }) => (
  <div className={classNames(className, styles.header)} {...rest}>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;