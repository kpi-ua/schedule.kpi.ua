import { NavLink, Route, Routes } from 'react-router-dom';
import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import WeekSwitch from '../../components/WeekSwitch';
import { routes } from '../../common/constants/routes';
import { getLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { useStore } from '../../store';
import { cn } from '../../common/utils/cn';

const scheduleLinks = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

const MainSettings = () => {
  const groupId = useStore((state) => state.group?.id);
  const lecturerId = useStore((state) => state.lecturer?.id);

  const getLinkUrl = (url: string) => {
    if (url.includes(routes.LECTURER)) {
      const savedLecturerId = lecturerId ?? getLocalStorageItem('lecturerId');
      return savedLecturerId ? `${url}?groupId=${savedLecturerId}` : url;
    }

    const savedGroupId = groupId ?? getLocalStorageItem('groupId');
    return savedGroupId ? `${url}?groupId=${savedGroupId}` : url;
  };

  return (
    <div className="flex grow flex-col items-center gap-[24px] leading-[1.43] max-[988px]:w-full">
      <nav className="flex max-w-[calc(100vw-3rem)] snap-x snap-mandatory items-center justify-between gap-[37px] overflow-x-scroll whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {scheduleLinks.map(({ value, label }) => (
          <NavLink
            end={value === routes.INDEX}
            key={value}
            to={getLinkUrl(value)}
            className={({ isActive }) =>
              cn(
                "relative cursor-pointer snap-center text-[18px] leading-[1.43] font-bold tracking-[0.01em] text-black no-underline snap-always after:top-[-12px] after:hidden after:h-[2px] after:rounded-[6px] after:bg-black after:content-['']",
                isActive && 'after:block',
              )
            }
            onClick={(event) =>
              event.currentTarget.scrollIntoView({
                inline: 'center',
                block: 'nearest',
                behavior: 'smooth',
              })
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="flex gap-[20px] max-[988px]:flex-col max-[988px]:items-center max-xs:w-full">
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
      </div>
    </div>
  );
};

export default MainSettings;
