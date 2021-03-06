import { createContext, useContext, useState } from 'react';

const LecturerContext = createContext(null);

export const useLecturerContext = () => useContext(LecturerContext);

export const LecturerContextProvider = ({children}) => {
  const [lecturer, setLecturer] = useState(null);

  const params = {setLecturer, lecturer};

  return (
    <LecturerContext.Provider value={params}>
      {children}
    </LecturerContext.Provider>
  );
};