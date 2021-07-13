import Speaker from '../components/Speaker';
import { Element } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap'
import useGetStaticData from '../services/useGetStaticData';
import { fetchConferenceData, fetchNavData, fetchGates } from '../api/client';
import { useState, useEffect } from 'react';
import { getQueryObject } from '../lib/path';

export default function Speakers() {

  let query = {};
  if (process.browser) {
    query = getQueryObject(window);
  }

  const { isLoaded, rpData } = useGetStaticData();

  const { speakerSection } = rpData;

  return(
	  <>
	  	<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet"/>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
		<Container fluid="lg">
			<Row>
				<Col xs={8} md={10} >
					{isLoaded && (
					<Element name="speakers">
					{<Speaker speakers={speakerSection.list} />}
					</Element>
					)}
				</Col>
			</Row>
		</Container>
	  </>
  );
}