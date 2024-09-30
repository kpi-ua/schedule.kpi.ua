import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { Lecturer } from '../../models/Lecturer';
import { SelectableEntityProvider } from './types';

interface Props {
  children: ReactNode;
}

interface LecturerContextType extends SelectableEntityProvider<Lecturer> {}

const LecturerContext = createContext<LecturerContextType>({
  setItem: () => ({}),
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

  const params: LecturerContextType = { item: lecturer, setItem: setLecturer };

  return (
    <LecturerContext.Provider value={params}>
      {children}
    </LecturerContext.Provider>
  );
};
