import React from "react";
import TimeDivider from "../../components/timeDivider";
import {GridWrapper, CurrentDayContainer, GridContainer, MultipleItems} from "./schedule.style";
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import OptionMultipleToggler from "../../components/optionMultipleToggler";

const Schedule = ({children}) => {
  const dynamicGeneratedTable = React.Children.map(children, (child, index) => {
    return (
        <>
          <TimeDivider>{index}</TimeDivider>
          {child}
        </>
    )
  });

  return (
        <GridContainer>
          <CurrentDayContainer/>
          <ScheduleHeader/>
          {dynamicGeneratedTable}
        </GridContainer>
  )
}

export default Schedule;