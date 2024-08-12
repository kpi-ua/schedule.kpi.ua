import { ScheduleItemWrapper } from './scheduleItem.style';
import ScheduleItemContent from '../../components/scheduleItemContent';

export const ScheduleItem = ({scheduleItemData}: { scheduleItemData: any }) => {
  return scheduleItemData ? (
    <ScheduleItemWrapper>
      <ScheduleItemContent scheduleItemData={scheduleItemData}/>
    </ScheduleItemWrapper>
  ) : null;
};

export default ScheduleItem;
