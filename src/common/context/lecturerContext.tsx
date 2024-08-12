import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface Props {
  children: ReactNode;
}

interface LecturerContextType {
  lecturer: string | null; // Change this to the actual type of lecturer
  setLecturer: React.Dispatch<React.SetStateAction<string | null>>;
}

const LecturerContext = createContext<LecturerContextType | null>(null);

export const useLecturerContext = () => {
  const context = useContext(LecturerContext);
  if (context === null) {
    throw new Error('useLecturerContext must be used within a LecturerContextProvider');
  }
  return context;
};

export const LecturerContextProvider: FC<Props> = ({ children }) => {
  const [lecturer, setLecturer] = useState<string | null>(null);
  
  const params = { lecturer, setLecturer };
  
  return (
    <LecturerContext.Provider value={params}>
      {children}
    </LecturerContext.Provider>
  );
};
