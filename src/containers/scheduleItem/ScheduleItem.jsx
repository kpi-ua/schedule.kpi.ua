import {ScheduleItemWrapper} from "./scheduleItem.style";
import ScheduleItemContent from "../../components/scheduleItemContent";

export const ScheduleItem = ({scheduleItemData, activeTab}) => {
  return scheduleItemData ? (
      <ScheduleItemWrapper>
        <ScheduleItemContent scheduleItemData={scheduleItemData}/>
      </ScheduleItemWrapper>
  ) : null;
};

export default ScheduleItem;
