import ScheduleItem from '../ScheduleItem';
import { EmptyElement } from './ScheduleRow.style';
import ScheduleItemExtended from '../ScheduleItemExtended';
import { UnknownScheduleMatrixCell } from '../../common/utils/generateScheduleMatrix';

interface ScheduleRowProps {
  scheduleMatrixCell: UnknownScheduleMatrixCell[];
}

const ScheduleRow = ({ scheduleMatrixCell }: ScheduleRowProps) => {
  return (
    <>
      {scheduleMatrixCell.map((item, index) => {
        if (Array.isArray(item)) {
          return <ScheduleItemExtended key={index} scheduleMatrixCell={item} />;
        }

        return item ? <ScheduleItem key={index} scheduleMatrixCell={item} /> : <EmptyElement key={index} />;
      })}
    </>
  );
};

export default ScheduleRow;
