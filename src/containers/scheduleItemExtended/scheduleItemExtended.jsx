import {ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper} from "./scheduleItemExtended.style";
import ScheduleItemContent from "../../components/scheduleItemContent";

const ScheduleItemExtended = ({scheduleItemData}) => {
  return scheduleItemData ? (
      <ScheduleItemExtendedWrapper items={3}>
        <ScheduleItemExtendedUnit>
          <ScheduleItemContent scheduleItemData={scheduleItemData}/>
        </ScheduleItemExtendedUnit>
        <ScheduleItemExtendedUnit>
          <ScheduleItemContent scheduleItemData={scheduleItemData}/>
        </ScheduleItemExtendedUnit>
        <ScheduleItemExtendedUnit>
          <ScheduleItemContent scheduleItemData={scheduleItemData}/>
        </ScheduleItemExtendedUnit>
      </ScheduleItemExtendedWrapper>
  ) : null;
}

export default ScheduleItemExtended;