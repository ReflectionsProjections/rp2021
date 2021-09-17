import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { Timeline } from 'react-twitter-widgets';

import classNames from 'classnames';
import styles from './Dashboard.module.scss';
import DashboardClock from './components/dashboardClock';
import DashboardEvents from './components/dashboardEvents';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: (props.sponsorImages ?? []).slice(0, 8),
      visibles: [true, true, true, true, true, true, true, true],
      enter: 750,
      exit: 750,
    };
  }

  componentWillMount() {
    setInterval(() => {
      const { visibles } = this.state;
      const index = Math.floor(Math.random() * visibles.length);
      visibles[index] = false;

      this.setState({ visibles });
    }, 5000);
  }

  randomLogos = (index) => {
    const { sponsorImages } = this.props;

    if (!sponsorImages) return;

    const { logos, visibles } = this.state;
    const allLogos = sponsorImages;

    let newLogoIndex = Math.floor(Math.random() * allLogos.length);
    let newLogo = allLogos[newLogoIndex];
    while (logos.indexOf(newLogo) >= 0) {
      newLogoIndex = Math.floor(Math.random() * allLogos.length);
      newLogo = allLogos[newLogoIndex];
    }

    logos[index] = allLogos[newLogoIndex];
    visibles[index] = true;
    this.setState({
      logos,
      visibles,
    });
  };

  render() {
    const { logos, visibles, enter, exit } = this.state;
    const { events } = this.props;

    return (
      <Container className={classNames(styles.dashboardContainer, styles.x)}>
        <Row className={styles.timeRow}>
          <Col className={styles.logoColumn}>
            <Image
              className={styles.rpLogo}
              src="../../static/assets/2020logo.svg"
            />
          </Col>
          <Col lg={4}>
            <DashboardClock clock title="Current Time" />
          </Col>
          <Col className={styles.logoColumn}>
            <Image
              className={styles.rpWordmark}
              src="../../static/assets/wordmarkblack.svg"
            />
          </Col>
        </Row>
        <Row className={styles.mainRow}>
          <Col>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(0)}
                in={visibles[0]}
              >
                <Image className={styles.logo} src={logos[0]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(1)}
                in={visibles[1]}
              >
                <Image className={styles.logo} src={logos[1]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(2)}
                in={visibles[2]}
              >
                <Image className={styles.logo} src={logos[2]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(3)}
                in={visibles[3]}
              >
                <Image className={styles.logo} src={logos[3]} fluid />
              </Transition>
            </Row>
          </Col>
          <Col className={styles.eventsColumn} lg={3}>
            <DashboardEvents events={events} />
          </Col>
          <Col className={styles.twitterContainer} lg={3}>
            <h2 className={styles.twitterTitle}>Twitter</h2>
            <div className={styles.twitterInnerContainer}>
              <Timeline
                dataSource={{ sourceType: 'profile', screenName: 'uiuc_rp' }}
                options={{
                  chrome: 'noborders nofooter noheader noscrollbar',
                  tweetLimit: 4,
                  ariaPolite: 'rude',
                  username: 'uiuc_rp',
                }}
              />
            </div>
          </Col>
          <Col>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(4)}
                in={visibles[4]}
              >
                <Image className={styles.logo} src={logos[4]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(5)}
                in={visibles[5]}
              >
                <Image className={styles.logo} src={logos[5]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(6)}
                in={visibles[6]}
              >
                <Image className={styles.logo} src={logos[6]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition
                timeout={{ enter, exit }}
                onExit={() => this.randomLogos(7)}
                in={visibles[7]}
              >
                <Image className={styles.logo} src={logos[7]} fluid />
              </Transition>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
