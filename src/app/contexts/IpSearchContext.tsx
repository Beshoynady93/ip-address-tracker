'use client';

import { createContext, useContext, useState } from 'react';

type IpSearchContext = {
  searchInput: string | undefined;
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const IpSearchContext = createContext<IpSearchContext | null>(null);

type IpSearchContextProvider = {
  children: React.ReactNode;
};

export const IpSearchContextProvider = ({
  children,
}: IpSearchContextProvider) => {
  const [searchInput, setSearchInput] = useState<string | undefined>();
  return (
    <IpSearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </IpSearchContext.Provider>
  );
};

export default IpSearchContextProvider;

export const useIpSearchContext = () => {
  const context = useContext(IpSearchContext);
  if (!context)
    throw new Error(
      'IpSearchContext can only be used within IpSearchContextProvider'
    );
  return context;
};
