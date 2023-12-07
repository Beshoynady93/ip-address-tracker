'use client';

import { useIpSearchContext } from '../contexts/IpSearchContext';

const DisplaySearchResults = () => {
  const { searchDataResults } = useIpSearchContext();
  return (
    <>
      {searchDataResults && (
        <section className="w-8/12 px-4 py-4 text-center text-black bg-white rounded-lg md:flex -translate-y-10 absolute z-[1000] translate-x-1/4">
          <div className="mb-4">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              ip address
            </h2>
            <span className="text-lg font-bold">{searchDataResults?.ip}</span>
          </div>
          <div className="mb-4">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              location
            </h2>
            <span className="text-lg font-bold">
              {searchDataResults?.location}
            </span>
          </div>
          <div className="mb-4">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              timezone
            </h2>
            <span className="text-lg font-bold">
              {searchDataResults?.timezone}
            </span>
          </div>
          <div className="mb-4">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              ISP
            </h2>
            <span className="text-lg font-bold">{searchDataResults?.isp}</span>
          </div>
        </section>
      )}
    </>
  );
};

export default DisplaySearchResults;
