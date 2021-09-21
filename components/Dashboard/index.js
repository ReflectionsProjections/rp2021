import React, { useState, useEffect } from 'react';

import useGetStaticData from '../../services/useGetStaticData';
import styles from './newDashboard.module.scss';

function getDashboardEvents(events) {
  if (!events) {
    [[], {}, []];
  }

  let eventObjects = events.allIds.map((id) => events.byId[id]);

  eventObjects.sort((eventA, eventB) => {
    return +new Date(eventA.time.start) - +new Date(eventB.time.start);
  });

  const allDayEvents = eventObjects.filter((event) => {
    const isAllDay = event.time.allDay;
    const isThisDay =
      new Date(event.time.start).getUTCDay() === new Date().getUTCDay();
    return isAllDay && isThisDay;
  });

  eventObjects = eventObjects.filter((event) => !event.time.allDay);

  let currentOrNext = eventObjects[0];

  const now = +new Date();

  for (let i = 0; i < eventObjects.length; i++) {
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

  return [before, currentOrNext, after, allDayEvents];
}

/*
 * adapted from:
 * https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
 */
function formatAMPM(date, showSeconds = false) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

function Event(event) {
  const {
    title,
    time: { start, end, allDay },
  } = event;

  return (
    <div className={styles.event}>
      <div className={styles.eventTitle}>{title}</div>
      <div className={styles.eventTime}>
        {!allDay ? (
          <>
            {formatAMPM(new Date(start))} - {formatAMPM(new Date(end))}
          </>
        ) : (
          'All Day'
        )}
      </div>
    </div>
  );
}

function DashboardEvents({ events }) {
  const [eventInfo, setEventInfo] = useState(getDashboardEvents(events));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval1 = setInterval(() => {
      setEventInfo(getDashboardEvents(events));
    }, 3600);

    const interval2 = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const [before, curr, after, allDayEvents] = eventInfo;

  return (
    <>
      <div className={styles.eventsMeta}>
        <h1>Register at acmrp.org</h1>
        <p className={styles.clock}>{formatAMPM(new Date()).toUpperCase()}</p>
        <h2>All Day Events</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginTop: '1.5rem',
            rowGap: '15px',
          }}
        >
          {allDayEvents.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </div>
      <div className={styles.events}>
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
      </div>
    </>
  );
}

export default function Dashboard() {
  const { isLoaded, rpData } = useGetStaticData();

  const { events, sponsors } = rpData;

  if (!isLoaded) return null;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/logo.png" alt="Reflections|Projections Logo" />
        <img src="/big_logo.png" alt="Reflections Projections Logo" />
      </div>
      <div className={styles.right}>
        <DashboardEvents events={events} />
      </div>
      <div className={styles.bottom}>
        {Object.keys(sponsors).map((tierKey) => {
          const tier = sponsors[tierKey];
          return (
            <>
              {tier.map((sponsor, idx) => (
                <div key={idx}>
                  <img
                    key={sponsor.name}
                    src={sponsor.img}
                    alt={sponsor.name}
                  />
                </div>
              ))}
            </>
          );
        })}
      </div>
    </div>
  );
}
