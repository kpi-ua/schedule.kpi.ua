import PreloadedListsContextProvider from 'common/context/preloadedListsContext';
import GroupContextProvider from 'common/context/groupContext';
import ThemeContextProvider from 'common/context/themeContext';
import LecturerContextProvider from 'common/context/lecturerContext';
import WeekContextProvider from 'common/context/weekContext';
import useCurrentDateParams from 'common/hooks/useCurrentDateParams';

const ContextWrapper = ({children}) => {
  const {currentWeek} = useCurrentDateParams();

  return (
    <WeekContextProvider initialValue={currentWeek === 1 ? 'firstWeek' : 'secondWeek'}>
      <PreloadedListsContextProvider>
        <GroupContextProvider>
          <ThemeContextProvider initialValue={null}>
            <LecturerContextProvider>
              {children}
            </LecturerContextProvider>
          </ThemeContextProvider>
        </GroupContextProvider>
      </PreloadedListsContextProvider>
    </WeekContextProvider>
  );
};

export default ContextWrapper;