import ScheduleTypeTabs from "../scheduleTypeTabs";
import EntitySearch from "../../components/entitySearch";
import WeekSwitch from "../../components/weekSwitch";
import { MainSettingsContainer } from "./mainSettings.style";
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
      <EntitySearch />
      <div style={{ width: "100%" }}>
        <WeekSwitch type={weekAvailable ? "weeks" : "semesters"}></WeekSwitch>
      </div>
    </MainSettingsContainer>
  );
};

export default MainSettings;
