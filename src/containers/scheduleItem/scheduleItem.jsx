import { ScheduleItemWrapper } from './scheduleItem.style';
import ScheduleItemContent from 'components/scheduleItemContent';

export const ScheduleItem = ({scheduleItemData}) => {
  return scheduleItemData ? (
    <ScheduleItemWrapper>
      <ScheduleItemContent scheduleItemData={scheduleItemData}/>
    </ScheduleItemWrapper>
  ) : null;
};

export default ScheduleItem;
