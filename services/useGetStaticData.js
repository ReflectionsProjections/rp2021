import { useState, useEffect } from 'react';

import { fetchConferenceData } from '../pages/api/client';

export default function useGetStaticData() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [rpData, setRpData] = useState({});
  const [nav, setNav] = useState({});
  const [gates, setGates] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const _conferenceData = await fetchConferenceData();
<<<<<<< HEAD
    //   const _nav = await fetchNavData();
    //   const _gates = await fetchGates();
      setRpData(_conferenceData);
    //   setNav(_nav);
    //   setGates(_gates);
=======
      // const _nav = await fetchNavData();
      // const _gates = await fetchGates();
      setRpData(_conferenceData);
      // setNav(_nav);
      // setGates(_gates);
>>>>>>> 7c9f31160cf871e24129b6ceb8f1eaccc8011b3b
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