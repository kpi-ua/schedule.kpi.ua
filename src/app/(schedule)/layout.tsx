import { Suspense } from 'react';
import { Navbar } from '../../containers/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import Legend from '../../components/Legend';
import Footer from '../../components/Footer';
import { WeekContextProvider } from '../../common/context/WeekContext';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';
import { getAllGroups, getAllLecturers, getCurrentTime } from '../../lib/campusApi/endpoints';

export default async function ScheduleRouteLayout({ children }: { children: React.ReactNode }) {
  const [groups, lecturers, currentTime] = await Promise.all([getAllGroups(), getAllLecturers(), getCurrentTime()]);

  const initialWeek = convertServerTimeToWeek(currentTime.currentWeek);

  return (
    <WeekContextProvider initialWeek={initialWeek}>
      <ScrollToTop>
        <Navbar groups={groups} lecturers={lecturers} />
        <div className="m-9 flex grow flex-col max-sm:m-4">
          {children}
          <Suspense fallback={null}>
            <Legend />
          </Suspense>
        </div>
      </ScrollToTop>
      <Footer />
    </WeekContextProvider>
  );
}
