import { Suspense } from 'react';
import { Navbar } from '../../containers/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import Legend from '../../components/Legend';
import Footer from '../../components/Footer';
import { WeekContextProvider } from '../../common/context/WeekContext';
import { NavigationPendingContextProvider } from '../../common/context/NavigationPendingContext';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';
import { unwrapAction } from '../../lib/unwrapAction';
import { getCurrentTimeAction } from '../../actions/time.actions';
import { ScheduleGrid } from '../../containers/ScheduleWrapper/ScheduleGrid';

interface Props {
  children: React.ReactNode;
  settings: React.ReactNode;
  syncDate: React.ReactNode;
}

export default async function ScheduleRouteLayout({ children, settings, syncDate }: Props) {
  const currentTime = await unwrapAction(getCurrentTimeAction());
  const initialWeek = convertServerTimeToWeek(currentTime.currentWeek);

  return (
    <WeekContextProvider initialWeek={initialWeek}>
      <NavigationPendingContextProvider>
        <ScrollToTop>
          <Navbar settings={settings} />
          <div className="flex flex-col m-9 grow max-sm:m-4">
            <ScheduleGrid>{children}</ScheduleGrid>
            <Suspense fallback={null}>
              <Legend syncDate={syncDate} />
            </Suspense>
          </div>
        </ScrollToTop>
        <Footer />
      </NavigationPendingContextProvider>
    </WeekContextProvider>
  );
}
