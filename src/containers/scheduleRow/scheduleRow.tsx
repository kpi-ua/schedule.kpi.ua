import ScheduleItem from '../scheduleItem';
import { EmptyElement } from './scheduleRow.style';
import ScheduleItemExtended from '../scheduleItemExtended';

interface ScheduleRowProps {
  dataset: any[];
}

const ScheduleRow = ({ dataset }: ScheduleRowProps) => {
  return (
    <>
      {dataset.map((item, index) => {
        if (Array.isArray(item)) {
          return <ScheduleItemExtended key={index} scheduleItemData={item} />
        }

        return item
          ? <ScheduleItem key={index} scheduleItemData={item} />
          : <EmptyElement key={index} />;
        })
      }
    </>
  );
};

export default ScheduleRow;