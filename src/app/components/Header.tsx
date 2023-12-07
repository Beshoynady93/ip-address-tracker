import React from 'react';
import IpSearch from './IpSearch';

const Header = () => {
  return (
    <header className="bg-pattern-mobile small:bg-pattern-desktop p-4 flex justify-center flex-col gap-4 min-h-[200px] bg-cover">
      <h1 className="text-xl font-bold text-center text-white">
        IP Adress Tracker
      </h1>
      <IpSearch />
    </header>
  );
};

export default Header;
