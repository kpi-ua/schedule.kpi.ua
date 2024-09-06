import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import { Lecturer } from '../../models/Lecturer';

interface Props {
  children: ReactNode;
}

interface LecturerContextType {
  lecturer?: Lecturer;
  setLecturer: React.Dispatch<React.SetStateAction<Lecturer | undefined>>;
}

const LecturerContext = createContext<LecturerContextType>({
  setLecturer: () => ({}),
});

export const useLecturerContext = () => {
  const context = useContext(LecturerContext);

  if (context === null) {
    throw new Error('useLecturerContext must be used within a LecturerContextProvider');
  }

  return context;
};

export const LecturerContextProvider: FC<Props> = ({ children }) => {
  const [lecturer, setLecturer] = useState<Lecturer>();

  const params: LecturerContextType = { lecturer, setLecturer };

  return (
    <LecturerContext.Provider value={params}>
      {children}
    </LecturerContext.Provider>
  );
};
