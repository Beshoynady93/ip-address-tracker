'use client';
import { useIpSearchContext } from '../contexts/IpSearchContext';
import ArrowSVG from '../../../public/images/icon-arrow.svg';
import Image from 'next/image';

const IpSearch = () => {
  const { searchInput, setSearchInput } = useIpSearchContext();

  const submitSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitSearchHandler}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for any IP address or domain"
        className="rounded-l-lg px-4 py-2 small:flex-1"
      />
      <button className="bg-black flex-grow-0 p-3 rounded-r-lg">
        <Image src={ArrowSVG} alt="" width={15} />
      </button>
    </form>
  );
};

export default IpSearch;
