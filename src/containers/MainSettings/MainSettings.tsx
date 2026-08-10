import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FiltersContainer, MainSettingsContainer } from './MainSettings.style';
import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import WeekSwitch from '../../components/WeekSwitch';
import { routes } from '../../common/constants/routes';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { getLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { useStore } from '../../store';

const scheduleTabs = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

const MainSettings = () => {
  const { pathname } = useLocation();
  const groupId = useStore((state) => state.group?.id);
  const lecturerId = useStore((state) => state.lecturer?.id);

  const getTabUrl = (url: string) => {
    if (url.includes(routes.LECTURER)) {
      const savedLecturerId = lecturerId ?? getLocalStorageItem('lecturerId');
      return savedLecturerId ? `${url}?groupId=${savedLecturerId}` : url;
    }

    const savedGroupId = groupId ?? getLocalStorageItem('groupId');
    return savedGroupId ? `${url}?groupId=${savedGroupId}` : url;
  };

  return (
    <MainSettingsContainer $flexDirection="column" $alignItems="center" $gap="24px">
      <Tabs value={pathname}>
        <TabsList className="flex max-w-[calc(100vw-3rem)] snap-x snap-mandatory items-center justify-between gap-[37px] overflow-x-scroll whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {scheduleTabs.map(({ value, label }) => (
            <TabsTrigger value={value} key={value} asChild>
              <Link
                to={getTabUrl(value)}
                className="relative cursor-pointer snap-center text-[18px] font-bold tracking-[0.01em] text-black no-underline [scroll-snap-stop:always] after:top-[-12px] after:hidden after:h-0.5 after:rounded-md after:bg-black after:content-[''] data-[state=active]:after:block"
                onClick={(event) =>
                  event.currentTarget.scrollIntoView({
                    inline: 'center',
                    block: 'nearest',
                    behavior: 'smooth',
                  })
                }
              >
                {label}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <FiltersContainer>
        <Routes>
          <Route
            index
            element={
              <>
                <GroupSearch />
                <WeekSwitch />
              </>
            }
          />
          <Route path={routes.SESSION} element={<GroupSearch />} />
          <Route
            path={routes.LECTURER}
            element={
              <>
                <LecturerSearch />
                <WeekSwitch />
              </>
            }
          />
        </Routes>
      </FiltersContainer>
    </MainSettingsContainer>
  );
};

export default MainSettings;
