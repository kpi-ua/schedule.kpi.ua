import { Suspense } from 'react';

import { getCurrentTimeAction } from '@/actions/time.actions';
import { Footer } from '@/components/footer';
import { Legend } from '@/components/legend';
import { NavigationBar } from '@/components/navigation-bar/navigation-bar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { NavigationPendingContextProvider } from '@/lib/context/navigation-pending-context';
import { WeekContextProvider } from '@/lib/context/week-context';
import { unwrapAction } from '@/lib/unwrapAction';
import { convertServerTimeToWeek } from '@/lib/utils/system.utils';

import { ScheduleGrid } from './_components/schedule-grid';

interface Props {
  children: React.ReactNode;
  settings: React.ReactNode;
}

export default async function ScheduleRouteLayout({ children, settings }: Props) {
  const currentTime = await unwrapAction(getCurrentTimeAction());
  const initialWeek = convertServerTimeToWeek(currentTime.currentWeek);

  return (
    <WeekContextProvider initialWeek={initialWeek}>
      <NavigationPendingContextProvider>
        <ScrollToTop>
          <NavigationBar settings={settings} />
          <div className="m-9 flex grow flex-col max-sm:m-4">
            <ScheduleGrid>{children}</ScheduleGrid>
            <Suspense fallback={null}>
              <Legend />
            </Suspense>
          </div>
        </ScrollToTop>
        <Footer />
      </NavigationPendingContextProvider>
    </WeekContextProvider>
  );
}
