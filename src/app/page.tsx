import { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';
import Header from './components/Header';

const apiKey = 'at_i5h7K8tcdAwCZO7YVsfTloFhnzXcG';

const Map = dynamic(() => import('./components/Leaflet'), {
  ssr: false,
});

export default async function Home() {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((location) => location);

  const position: LatLngExpression = [data.location.lng, data.location.lat];

  return (
    <main className="">
      <Header />
      {<Map position={position} />}
    </main>
  );
}
