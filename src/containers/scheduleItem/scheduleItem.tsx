import { ScheduleItemWrapper } from './scheduleItem.style';
import ScheduleItemContent from '../../components/scheduleItemContent';

interface ScheduleItemProps {
  scheduleItemData: any;
}

export const ScheduleItem = ({ scheduleItemData }: ScheduleItemProps) => {
  return (
    <ScheduleItemWrapper>
      <ScheduleItemContent scheduleItemData={scheduleItemData} />
    </ScheduleItemWrapper>
  );
};

export default ScheduleItem;
