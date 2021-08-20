import { useState, useEffect } from 'react';

import { fetchConferenceData } from '../api/client';

export default function useGetStaticData() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rpData, setRpData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const _conferenceData = await fetchConferenceData();
      setRpData(_conferenceData);
      setIsLoaded(true);
    };
    if (!isLoaded) {
      loadData();
    }
  });

  return {
    isLoaded,
    rpData
  };
}