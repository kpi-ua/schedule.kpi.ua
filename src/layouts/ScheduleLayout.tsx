import Footer from '../components/Footer';
import { Navbar } from '../containers/Navbar/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';
import { useCurrentTime } from '../queries/useCurrentTime';
import { useWeekStore } from '../store/weekStore';
import { Outlet } from 'react-router-dom';
import Legend from '../components/Legend';
import { convertServerTimeToWeek } from '../common/utils/weekConverter';

export const ScheduleLayout = () => {
  const { data, isLoading } = useCurrentTime();
  const setCurrentWeek = useWeekStore((state) => state.setCurrentWeek);

  useEffect(() => {
    if (!isLoading && data?.currentWeek) {
      setCurrentWeek(convertServerTimeToWeek(data.currentWeek));
    }
  }, [data?.currentWeek, setCurrentWeek, isLoading]);

  return (
    <ScrollToTop>
      <Navbar />
      <div className="m-9 flex grow flex-col max-xs:m-4">
        <Outlet />
        <Legend />
      </div>
      <Footer />
    </ScrollToTop>
  );
};
