import ScheduleItem from '../scheduleItem';
import React from 'react';
import { EmptyElement } from './scheduleRow.style';

const ScheduleRow = ({dataset}) => {

  const generateScheduleItem = dataset => {
    return dataset.map((item, index) => {
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