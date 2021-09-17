import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import styles from './dashboardClock.scss';

export default class DashboardClock extends Component {
  constructor() {
    super();
    this.state = {
      countdownTime: {
        d: '0',
        h: '0',
        m: '0',
        s: '0'
      },
      currentTimer: {
        h: '0',
        m: '0',
        type: ''
      }
    };
  }

  componentDidMount() {
    const countdownDate = new Date('Feb 25, 2018 11:00:00').getTime();

    setInterval(() => {
      const now = new Date();
      const dist = countdownDate - now.getTime();

      let CDd = Math.floor(dist / (1000 * 60 * 60 * 24)).toString();
      let CDh = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      let CDm = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)).toString();
      let CDs = Math.floor((dist % (1000 * 60)) / 1000).toString();

      if (dist < 0) {
        CDd = 0;
        CDh = 0;
        CDm = 0;
        CDs = 0;
      }

      const NOWh = now.getHours() % 12;
      const NOWm = now.getMinutes();
      const type = now.getHours() < 12 ? 'AM' : 'PM';

      this.setState({
        countdownTime: {
          d: CDd,
          h: CDh,
          m: CDm,
          s: CDs
        },
        currentTimer: {
          h: NOWh,
          m: NOWm,
          type
        }
      });
    }, 1000);
  }

  render() {
    const { clock, title } = this.props;
    const { countdownTime, currentTimer } = this.state;

    const currentTimerH = currentTimer.h;
    const currentTimerM =
      currentTimer.m.toString().length === 1
        ? `0${currentTimer.m}`
        : currentTimer.m;

    return (
      <Segment textAlign="center" className={styles.countdownContainer}>
        <div className={styles.countdownTitle}>{title}</div>
        {clock ? (
          <Segment basic className={styles.currentTimer}>
            <div>
              <h1 className={styles.currentTimer__number}>
                {`${currentTimerH}:${currentTimerM}`}
              </h1>
            </div>
            <div>
              <h3 className={styles.currentTimer__letter}>
                {currentTimer.type}
              </h3>
            </div>
          </Segment>
        ) : (
          <Segment basic className={styles.countdownTimer}>
            <div>
              <h1 className={styles.countdownTimer__number}>
                {countdownTime.d.length === 1
                  ? `0${countdownTime.d}`
                  : countdownTime.d}
              </h1>
            </div>
            <div>
              <h3 className={styles.countdownTimer__letter}>D</h3>
            </div>

            <div>
              <h1 className={styles.countdownTimer__number}>
                {countdownTime.h.length === 1
                  ? `0${countdownTime.h}`
                  : countdownTime.h}
              </h1>
            </div>
            <div>
              <h3 className={styles.countdownTimer__letter}>H</h3>
            </div>

            <div>
              <h1 className={styles.countdownTimer__number}>
                {countdownTime.m.length === 1
                  ? `0${countdownTime.m}`
                  : countdownTime.m}
              </h1>
            </div>
            <div>
              <h3 className={styles.countdownTimer__letter}>M</h3>
            </div>

            <div>
              <h1 className={styles.countdownTimer__number}>
                {countdownTime.s.length === 1
                  ? `0${countdownTime.s}`
                  : countdownTime.s}
              </h1>
            </div>
            <div>
              <h3 className={styles.countdownTimer__letter}>S</h3>
            </div>
          </Segment>
        )}
      </Segment>
    );
  }
}
