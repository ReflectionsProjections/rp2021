import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';

import Section from '../Section';
import { UITimeline, UITimelineEvent } from './Timeline';

const TIME_FORMAT = 'MM-DD-YYYY HH:mm';
const DAY_FORMAT = 'MM-DD-YYYY';

/* Grabs all events */
const getEventsList = (events) => {
  if (typeof events !== 'object') {
    return [];
  }

  return events.allIds.map((id) => {
    const event = events.byId[id];
    return {
      ...event,
      id,
      key: id,
    };
  });
};

/* */
const filterEvents = (events, day, type, isAllDay = false) => {
  if (!Array.isArray(events)) {
    return [];
  }
  return events
    .filter(({ time }) => (isAllDay ? time.allDay : !time.allDay))
    .filter(({ displayInAgenda, time }) =>
      day
        ? moment(time.start, TIME_FORMAT).isSame(
            moment(day, DAY_FORMAT),
            'day'
          ) && displayInAgenda
        : true
    )
    .filter((event) => (type !== '' ? event.type === type : true))
    .sort((a, b) =>
      moment(a.time.start, TIME_FORMAT).isBefore(
        moment(b.time.start, TIME_FORMAT)
      )
        ? -1
        : 1
    );
};

const formatTime = (time) => {
  const start = moment(time.start, TIME_FORMAT).format('hh:mma');
  const end = moment(time.end, TIME_FORMAT).format('hh:mma');
  return `${start} - ${end}`;
};

const AllDayAgenda = ({ events }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
      <UITimeline>
        <UITimeline.Body>
          {events.map((event) => (
            <UITimelineEvent key={event.title}>
              <UITimelineEvent.Time>All day</UITimelineEvent.Time>
              <UITimelineEvent.Body>
                {event.title}
                <br />
                <span
                  dangerouslySetInnerHTML={{ __html: event.location }}
                  style={{ fontWeight: 200 }}
                />
              </UITimelineEvent.Body>
            </UITimelineEvent>
          ))}
        </UITimeline.Body>
      </UITimeline>
    </Col>
  );
};

const DayAgenda = ({ events }) => {
  if (!events || events.length === 0) {
    return null;
  }
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
      <UITimeline>
        <UITimeline.Body>
          {events.map((event) => (
            <UITimelineEvent key={event.title}>
              <UITimelineEvent.Time>
                {formatTime(event.time)}
              </UITimelineEvent.Time>
              <UITimelineEvent.Body>
                {event.title}
                <br />
                <span
                  dangerouslySetInnerHTML={{ __html: event.location }}
                  style={{ fontWeight: 200 }}
                />
              </UITimelineEvent.Body>
            </UITimelineEvent>
          ))}
        </UITimeline.Body>
      </UITimeline>
    </Col>
  );
};

const DATES_FORMATTED = {
  '09-20-2021': 'Monday Sep 20th',
  '09-21-2021': 'Tuesday Sep 21st',
  '09-22-2021': 'Wednesday Sep 22nd',
  '09-23-2021': 'Thursday Sep 23rd',
  '09-24-2021': 'Friday Sep 24th',
  '09-25-2021': 'Saturday Sep 25th',
};

const getDefaultDate = () => {
  const curr = new Date();
  const currFormatted = [
    (curr.getMonth() + 1).toString().padStart(2, '0'),
    curr.getDate().toString().padStart(2, '0'),
    curr.getFullYear(),
  ].join('-');
  if (DATES_FORMATTED[currFormatted]) {
    return [currFormatted, DATES_FORMATTED[currFormatted]];
  }
  return ['09-20-2021', DATES_FORMATTED['09-20-2021']];
};

const Agenda = ({ events }) => {
  const allEvents = getEventsList(events);

  const [selectedType, setSelectedType] = useState('');
  const [defaultSelectedDate, defaultSelectedDateWeek] = getDefaultDate();
  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  const [selectedDateWeek, setSelectedDateWeek] = useState(
    defaultSelectedDateWeek
  );
  const [dropdownActive, setDropDownActive] = useState(false);

  const handleDropdown = () => {
    setDropDownActive(!dropdownActive);
  };

  return (
    <Section>
      <Section.Header>
        <Section.Title></Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row className="pb-4">
            <Col className="text-center">
              <Dropdown className="toggle" onClick={() => handleDropdown()}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="togglebar"
                >
                  {selectedDateWeek.substr(0, selectedDateWeek.indexOf(' '))}
                </Dropdown.Toggle>
                <Dropdown.Menu className="togglemenu">
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-20-2021');
                      setSelectedDateWeek('Monday Sep 20th');
                    }}
                  >
                    Monday
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-21-2021');
                      setSelectedDateWeek('Tuesday Sep 21th');
                    }}
                  >
                    Tuesday
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-22-2021');
                      setSelectedDateWeek('Wednesday Sep 22th');
                    }}
                  >
                    Wednesday
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-23-2021');
                      setSelectedDateWeek('Thursday Sep 23th');
                    }}
                  >
                    Thursday
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-24-2021');
                      setSelectedDateWeek('Friday Sep 24th');
                    }}
                  >
                    Friday
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="toggleitem"
                    onClick={() => {
                      setSelectedDate('09-25-2021');
                      setSelectedDateWeek('Saturday Sep 25th');
                    }}
                  >
                    Saturday
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                    className="toggleitem"
                    href="#/action-7"
                    onClick={() => {
                      setSelectedDate('09-22-2019');
                      setSelectedDateWeek('Sunday Sep 22th');
                    }}
                  >
                    Sunday
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <UITimeline.Title>{selectedDateWeek}</UITimeline.Title>
          <Row>
            <AllDayAgenda
              events={filterEvents(allEvents, selectedDate, selectedType, true)}
            />
          </Row>
          <Row>
            <DayAgenda
              events={filterEvents(allEvents, selectedDate, selectedType)}
            />
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Agenda;
