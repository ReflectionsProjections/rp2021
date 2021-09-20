import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { Timeline } from 'react-twitter-widgets';

import useGetStaticData from '../../services/useGetStaticData';
import Agenda from '../Agenda';
import classNames from 'classnames';
// import styles from './Dashboard.module.scss';
import styles from './newDashboard.module.scss';

function getDashboardEvents(events) {
  if (!events) {
    [[], {}, []];
  }

  const eventObjects = events.allIds.map((id) => events.byId[id]);
  eventObjects.sort((eventA, eventB) => {
    return +new Date(eventA.time.start) - +new Date(eventB.time.start);
  });

  let currentOrNext = eventObjects[0];

  const now = +new Date('09-21-2021 16:30');

  for (let i = 1; i < eventObjects.length; i++) {
    const event = eventObjects[i];
    if (+new Date(event.time.end) > now) {
      currentOrNext = eventObjects[i];
      break;
    }
  }

  const before = eventObjects
    .filter((event) => {
      return +new Date(event.time.start) < +new Date(currentOrNext.time.start);
    })
    .slice(-3);

  const after = eventObjects
    .filter((event) => {
      return +new Date(event.time.start) > +new Date(currentOrNext.time.start);
    })
    .slice(0, 3);

  return [before, currentOrNext, after];
}

/*
 * adapted from:
 * https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
 */
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
}

function Event(event) {
  const {
    title,
    description,
    time: { start, end },
  } = event;

  return (
    <div className={styles.event}>
      <div className={styles.eventTitle}>{title}</div>
      <div className={styles.eventDescription}>{description}</div>
      <div className={styles.eventTime}>
        {formatAMPM(new Date(start))} - {formatAMPM(new Date(end))}
      </div>
    </div>
  );
}

function DashboardEvents({ events }) {
  const [eventInfo, setEventInfo] = useState(getDashboardEvents(events));
  useEffect(() => {
    const interval = setInterval(() => {
      setEventInfo(getDashboardEvents(events));
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const [before, curr, after] = eventInfo;
  return (
    <>
      <div className={styles.before}>
        {before.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
      <div className={styles.current}>
        {curr && <Event key={curr.id} {...curr} />}
      </div>
      <div className={styles.after}>
        {after.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}

export default function Dashboard() {
  const { isLoaded, rpData } = useGetStaticData();

  const { events } = rpData;

  if (!isLoaded) return null;

  return (
    <div className={styles.container}>
      <div className={styles.left}>test</div>
      <div className={styles.right}>
        <DashboardEvents events={events} />
      </div>
      <div className={styles.bottom}>sponsors</div>
    </div>
  );
}
