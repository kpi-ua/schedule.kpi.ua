import { Suspense } from 'react';
import { Navbar } from '../../containers/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import Legend from '../../components/Legend';
import Footer from '../../components/Footer';
import { WeekContextProvider } from '../../common/context/WeekContext';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';
import { unwrapAction } from '../../lib/unwrapAction';
import { getAllGroupsAction } from '../../actions/group.actions';
import { getAllLecturersAction } from '../../actions/lecturer.actions';
import { getCurrentTimeAction } from '../../actions/time.actions';

export default async function ScheduleRouteLayout({ children }: { children: React.ReactNode }) {
  const [groups, lecturers, currentTime] = await Promise.all([
    unwrapAction(getAllGroupsAction()),
    unwrapAction(getAllLecturersAction()),
    unwrapAction(getCurrentTimeAction()),
  ]);

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
