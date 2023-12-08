'use client';

import { useIpSearchContext } from '../contexts/IpSearchContext';

const DisplaySearchResults = () => {
  const { searchDataResults, isDisplayOpen, setIsDisplayOpen } =
    useIpSearchContext();

  return (
    <>
      {searchDataResults && isDisplayOpen && (
        <section className="w-8/12 px-4 py-4 text-center text-black bg-white rounded-lg md:flex md:gap-4 lg:gap-6 md:justify-start -translate-y-10 absolute z-[1000] translate-x-1/4">
          <button
            className={`absolute right-2 top-2`}
            onClick={() => setIsDisplayOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
