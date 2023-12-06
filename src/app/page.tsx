import dynamic from 'next/dynamic';

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

  const position = [data.location.lat, data.location.lng];

  console.log(data);

  return <main className="">{<Map position={position} zoom={13} />}</main>;
}
