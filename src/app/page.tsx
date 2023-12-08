'use client';
import { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import DisplaySearchResults from './components/DisplaySearchResults';
import { getLocation } from './util/getLocation';
import { useEffect } from 'react';
import { useIpSearchContext } from './contexts/IpSearchContext';
import { MapContainer } from 'react-leaflet';

const Map = dynamic(() => import('./components/Leaflet'), {
  ssr: false,
});

export default function Home() {
  const { setSearchDataResults, searchDataResults } = useIpSearchContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocation();
      setSearchDataResults(data);
    };
    fetchData();
  }, [setSearchDataResults]);

  if (!searchDataResults) return;

  return (
    <main>
      <Header />
      <DisplaySearchResults />
      <MapContainer>
        <Map />
      </MapContainer>
    </main>
  );
}
