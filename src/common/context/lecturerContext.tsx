import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode
}

interface LecturerContextType {
  lecturer: any,
  setLecturer: React.Dispatch<string>
}

const LecturerContext = createContext<LecturerContextType | null>(null);

export const useLecturerContext = () => useContext<LecturerContextType | null>(LecturerContext);

export const LecturerContextProvider: React.FC<Props> = ({children}) => {
  const [lecturer, setLecturer] = useState(null);

  const params = {setLecturer, lecturer};

  return (
    <LecturerContext.Provider value={params || null}>
      {children}
    </LecturerContext.Provider>
  );
};