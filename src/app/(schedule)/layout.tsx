import { Suspense } from 'react';
import { Navbar } from '../../containers/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import Legend from '../../components/Legend';
import Footer from '../../components/Footer';
import { WeekContextProvider } from '../../common/context/WeekContext';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';
import { unwrapAction } from '../../lib/unwrapAction';
import { getCurrentTimeAction } from '../../actions/time.actions';

interface Props {
  children: React.ReactNode;
  settings: React.ReactNode;
}

export default async function ScheduleRouteLayout({ children, settings }: Props) {
  const currentTime = await unwrapAction(getCurrentTimeAction());
  const initialWeek = convertServerTimeToWeek(currentTime.currentWeek);

  return (
    <WeekContextProvider initialWeek={initialWeek}>
      <ScrollToTop>
        <Navbar settings={settings} />
        <div className="flex flex-col m-9 grow max-sm:m-4">
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
