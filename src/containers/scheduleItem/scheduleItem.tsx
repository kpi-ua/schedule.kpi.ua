import { ScheduleItemWrapper } from './scheduleItem.style';
import ScheduleItemContent from '../../components/scheduleItemContent';
import { ScheduleMatrixCell } from '../../common/utils/generateScheduleMatrix';

interface ScheduleItemProps {
  scheduleMatrixCell: ScheduleMatrixCell;
}

export const ScheduleItem = ({ scheduleMatrixCell }: ScheduleItemProps) => {
  return (
    <ScheduleItemWrapper>
      <ScheduleItemContent scheduleMatrixCell={scheduleMatrixCell} />
    </ScheduleItemWrapper>
  );
};

export default ScheduleItem;
