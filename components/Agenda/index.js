import React, { useState } from 'react';
import moment from 'moment';

import { isMobile } from 'react-device-detect';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';
import Dropdown from 'react-bootstrap/Dropdown'

/* Grabs all events */
const getEventsList = events => {
  if (typeof events !== 'object') {
    return [];
  }

  return events.allIds.map(id => {
    const event = events.byId[id];
    return {
      ...event,
      id,
      key: id
    };
  });
};

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", event => {
    const width = window.outerWidth;
    const height = window.outerHeight;
    const xOffset = 16;
    const yOffset = 0;
    const mouseXpercentage = (event.clientX / width * 100) + xOffset;//Math.round(event.pageX / width * 100);
    const mouseYpercentage = (event.clientY / height * 100) + yOffset;//Math.round(event.pageY / height * 100);
    document.getElementsByTagName("body")[0].style = "background: radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #EF7B23, #ffffff)";
  });
}

/* */
const filterEvents = (events, day, type) => {
  if (!Array.isArray(events)) {
    return [];
  }

  return events
    .filter(({ displayInAgenda, time }) =>
      day
        ? moment(time.start, TIME_FORMAT).isSame(
            moment(day, DAY_FORMAT),
            'day'
          ) && displayInAgenda
        : true
    )
    .filter(event => (type !== '' ? event.type === type : true))
    .sort((a, b) =>
      moment(a.time.start, TIME_FORMAT).isBefore(
        moment(b.time.start, TIME_FORMAT)
      )
        ? -1
        : 1
    );
};

const formatTime = time => {
  const start = moment(time.start, TIME_FORMAT).format('hh:mma');
  const end = moment(time.end, TIME_FORMAT).format('hh:mma');
  return `${start} - ${end}`;
};

const DayAgenda = ({ label, events }) => {
  if (!events || events.length === 0) {
    return null;
  }
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
      <UITimeline>
        <UITimeline.Title>{label}</UITimeline.Title>
        <UITimeline.Body>
          {events.map(event => (
            <UITimelineEvent key={event.title}>
              <UITimelineEvent.Time>
                {formatTime(event.time)}
              </UITimelineEvent.Time>
              <UITimelineEvent.Body>
                {event.title}
                <br />
                <span style={{ fontWeight: 200 }}>{event.location}</span>
                {event.hasPage && (
                  <>
                    <br />
                    <a
                      href={`/events/?id=${event.id}`}
                      style={{ fontWeight: '400' }}
                    >
                      More Info &#8250;
                    </a>
                  </>
                )}
              </UITimelineEvent.Body>
            </UITimelineEvent>
          ))}
        </UITimeline.Body>
      </UITimeline>
    </Col>
  );
};

const Agenda = ({ events }) => {
  const allEvents = getEventsList(events);

  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('09-16-2019')
  const [selectedDateWeek, setSelectedDateWeek] = useState('Monday Sep 16th');
  const [dropdownActive, setDropDownActive] = useState(false);
  const handleSelect = value => {
    setSelectedType(value);
  };

  const handleDropdown = () => {
    setDropDownActive(!dropdownActive);
    if (!dropdownActive) {
      document.getElementsByClassName("margin")[0].style.height = "300px";
    } else {
      document.getElementsByClassName("margin")[0].style.height = "0px";
    }
  }

  const startupFairMapLink = isMobile
    ? '/static/startup-fair-map.jpg'
    : '/static/startup-fair-map.pdf';
  const careerFairMapLink = isMobile
    ? '/static/career-fair-map.jpg'
    : '/static/career-fair-map.pdf';


  return (
    <Section>
      <Section.Header>
        <Section.Title></Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          {/* <Row className="pb-4">
            <Col className="text-center">
              <Button style={{ margin: '10px' }} href={startupFairMapLink}>
                Startup Fair Map
              </Button>
              <Button style={{ margin: '10px' }} href={careerFairMapLink}>
                Career Fair Map
              </Button>
            </Col>
          </Row> */}
          <Row className="pb-4">
            <Col className="text-center">
              <Dropdown onClick={() => handleDropdown()}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{"background-color": "#F3681F", "color": "black", "width": "500px"}}>
                  {selectedDateWeek}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{"background-color": "#FEA55B", "width": "500px"}}>
                  <Dropdown.Item style={{"background-color": "#FEA55B", "color": "black"}} href="#/action-1" onClick={() => {setSelectedDate("09-16-2019"); setSelectedDateWeek("Monday Sep 16th")}}>Monday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-2" onClick={() => {setSelectedDate("09-17-2019"); setSelectedDateWeek("Tuesday Sep 17th")}}>Tuesday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-3" onClick={() => {setSelectedDate("09-18-2019"); setSelectedDateWeek("Wednesday Sep 18th")}}>Wednesday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-4" onClick={() => {setSelectedDate("09-19-2019"); setSelectedDateWeek("Thursday Sep 19th")}}>Thursday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-5" onClick={() => {setSelectedDate("09-20-2019"); setSelectedDateWeek("Friday Sep 20th")}}>Friday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-6" onClick={() => {setSelectedDate("09-21-2019"); setSelectedDateWeek("Saturday Sep 21th")}}>Saturday</Dropdown.Item>
                  <Dropdown.Item style={{"background-color": "#FEA55B"}} href="#/action-7" onClick={() => {setSelectedDate("09-22-2019"); setSelectedDateWeek("Sunday Sep 22th")}}>Sunday</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <div className = "margin" style={{"height": "0px"}}></div>
          <Row>
            <DayAgenda
              label={selectedDateWeek}
              events={filterEvents(allEvents, selectedDate, selectedType)}
            />
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Agenda;
