import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import moment from 'moment';
import styles from './dashboardEvents.scss';

const DashboardEvent = ({ event }) => {
  return (
    <Row className={styles.dashboardEvent}>
      <Col>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <h4 className={styles.eventDescription}>{event.location}</h4>
        <h4 className={styles.eventDescription}>
          {moment(event.time.start).format('hh:mm a')} -{' '}
          {moment(event.time.end).format('hh:mm a')}
        </h4>
      </Col>
    </Row>
  );
};

export default class DashboardEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingEvents: []
    };
  }

  componentWillMount() {
    this.updateUpcomingEvents();
  }

  componentDidMount() {
    setInterval(() => {
      this.updateUpcomingEvents();
    }, 600000);
  }

  updateUpcomingEvents = () => {
    const { events } = this.props;
    const currentTime = moment();
    const filteredEvents = events.filter(event => {
      const time = moment(event.time.end);
      return time.isAfter(currentTime);
    });
    this.setState({ upcomingEvents: filteredEvents.slice(0, 5) });
  };

  render() {
    const { upcomingEvents } = this.state;
    return (
      <Container className={styles.eventsContainer}>
        <h2 className={styles.containerTitle}>Upcoming Events</h2>
        {upcomingEvents.map(event => {
          return <DashboardEvent event={event} key={event.title} />;
        })}
      </Container>
    );
  }
}
