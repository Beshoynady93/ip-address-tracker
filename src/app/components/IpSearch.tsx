'use client';
import { useIpSearchContext } from '../contexts/IpSearchContext';
import ArrowSVG from '../../../public/images/icon-arrow.svg';
import Image from 'next/image';
import { getLocation } from '../util/getLocation';

const IpSearch = () => {
  const {
    searchInput,
    setSearchInput,
    setSearchDataResults,
    setIsDisplayOpen,
  } = useIpSearchContext();

  const submitSearchHandler = async () => {
    if (!searchInput) return;
    const data = await getLocation(searchInput);
    setSearchDataResults(data);
    setSearchInput('');
    setIsDisplayOpen(true);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center justify-center"
    >
      <input
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for any IP address or domain"
        className="px-4 py-2 text-black rounded-l-lg small:flex-1 max-w-md"
      />
      <button
        className="flex-grow-0 p-3 bg-black rounded-r-lg"
        onClick={submitSearchHandler}
      >
        <Image src={ArrowSVG} alt="" width={15} />
      </button>
    </form>
  );
};

export default IpSearch;
