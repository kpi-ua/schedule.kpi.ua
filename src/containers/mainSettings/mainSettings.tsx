import ScheduleTypeTabs from "../scheduleTypeTabs";
import EntitySearch from "../../components/entitySearch";
import WeekSwitch from "../../components/weekSwitch";
import { FiltersContainer, MainSettingsContainer } from "./mainSettings.style";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MainSettings = () => {
  const { pathname } = useLocation();
  const [weekAvailable, setWeekAvailable] = useState(true);

  useEffect(() => {
    if (pathname.includes("sessions")) {
      setWeekAvailable(false);
    } else {
      setWeekAvailable(true);
    }
  }, [pathname]);

  return (
    <MainSettingsContainer
      flexDirection="column"
      alignItems="center"
      gap="24px"
    >
      <ScheduleTypeTabs />
      <FiltersContainer>
        <EntitySearch />
        <WeekSwitch type={weekAvailable ? "weeks" : "semesters"}></WeekSwitch>
      </FiltersContainer>
    </MainSettingsContainer>
  );
};

export default MainSettings;
