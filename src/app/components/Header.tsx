import React from 'react';
import IpSearch from './IpSearch';

const Header = () => {
  return (
    <header className="bg-pattern-mobile small:bg-pattern-desktop p-4 flex justify-center flex-col gap-4">
      <h1 className="text-white font-bold text-xl text-center">
        IP Adress Tracker
      </h1>
      <IpSearch />
    </header>
  );
};

export default Header;
