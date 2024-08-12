import ScheduleItem from '../scheduleItem';
import React from 'react';
import { EmptyElement } from './scheduleRow.style';
import ScheduleItemExtended from '../scheduleItemExtended';

const ScheduleRow = ({dataset}: { dataset: any[] }) => {

  const generateScheduleItem = (dataset: any[]) => {
    return dataset.map((item, index) => {
      if (Array.isArray(item)) {
        return <ScheduleItemExtended key={index} scheduleItemData={item} />
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