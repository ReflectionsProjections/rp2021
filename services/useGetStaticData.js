import { useState, useEffect } from 'react';

import { fetchConferenceData, fetchNavData, fetchGates } from '../api/client';

export default function useGetStaticData() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [rpData, setRpData] = useState({});
  const [nav, setNav] = useState({});
  const [gates, setGates] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const _conferenceData = await fetchConferenceData();
      const _nav = await fetchNavData();
      const _gates = await fetchGates();
      setRpData(_conferenceData);
      setNav(_nav);
      setGates(_gates);
      setIsLoaded(true);
    };
    if (!isLoaded) {
      loadData();
    }
  });

  return {
    isLoaded,
    rpData,
    nav,
    gates
  };
}
