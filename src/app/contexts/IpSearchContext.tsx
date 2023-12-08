'use client';

import { createContext, useContext, useState } from 'react';
import { ApiResponse } from '../util/getLocation';

type IpSearchContext = {
  searchInput: string | undefined;
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchDataResults: ApiResponse | undefined;
  setSearchDataResults: React.Dispatch<
    React.SetStateAction<ApiResponse | undefined>
  >;
  isDisplayOpen: boolean;
  setIsDisplayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const IpSearchContext = createContext<IpSearchContext | null>(null);

type IpSearchContextProvider = {
  children: React.ReactNode;
};

export const IpSearchContextProvider = ({
  children,
}: IpSearchContextProvider) => {
  const [searchInput, setSearchInput] = useState<string | undefined>('');
  const [searchDataResults, setSearchDataResults] = useState<
    ApiResponse | undefined
  >();
  const [isDisplayOpen, setIsDisplayOpen] = useState(true);

  return (
    <IpSearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        searchDataResults,
        setSearchDataResults,
        isDisplayOpen,
        setIsDisplayOpen,
      }}
    >
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
