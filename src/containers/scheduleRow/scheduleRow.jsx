import ScheduleItem from 'containers/scheduleItem';
import { EmptyElement } from './scheduleRow.style';
import ScheduleItemExtended from 'containers/scheduleItemExtended';

const ScheduleRow = ({dataset}) => {

  const generateScheduleItem = dataset => {
    return dataset.map((item, index) => {
      if (Array.isArray(item)) {
        return <ScheduleItemExtended key={index} scheduleItemData={item}/>;
      }

      return item ? <ScheduleItem key={index} scheduleItemData={item}/> : <EmptyElement key={index}/>;
    });
  };
  return (
    <>
      {generateScheduleItem(dataset)}
    </>
  );
};

export default ScheduleRow;