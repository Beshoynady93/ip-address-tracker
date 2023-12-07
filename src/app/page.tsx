import { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import DisplaySearchResults from './components/DisplaySearchResults';
import { getLocation } from './util/getLocation';

const Map = dynamic(() => import('./components/Leaflet'), {
  ssr: false,
});

export default async function Home() {
  const data = await getLocation();

  const position: LatLngExpression = [data.lng, data.lat];

  return (
    <main className="">
      <Header />
      <DisplaySearchResults />
      <Map position={position} />
    </main>
  );
}
