const apiKey = 'at_i5h7K8tcdAwCZO7YVsfTloFhnzXcG';

export type ApiResponse = {
  ip: string;
  lat: number;
  lng: number;
  timezone: string;
  isp: string;
  location: string;
};

export const getLocation = async (ipAddress?: string) => {
  const apiURL = ipAddress
    ? `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}&ipAddress=${ipAddress}`
    : `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`;
  const data = await fetch(apiURL)
    .then((res) => res.json())
    .then((location) => location);

  return {
    ip: data.ip,
    lat: data.location.lat,
    lng: data.location.lng,
    timezone: `UTC ${data.location.timezone}`,
    isp: data.isp,
    location: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
  } as ApiResponse;
};
