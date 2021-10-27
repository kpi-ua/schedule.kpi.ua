import ScheduleItem from "../scheduleItem";
import React from "react";
import ScheduleItemExtended from "../scheduleItemExtended";

const ScheduleRow = ({order}) => {
  const rowStartForMultipleItems = order * 2 + 1;
  return (
      <>
        <ScheduleItemExtended scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }} />
        <ScheduleItem scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }}/>
        <ScheduleItem scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }}/>
        <ScheduleItem scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }}/>
        <ScheduleItem scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }}/>
        <ScheduleItem scheduleItemData={{
          type: 'test',
          time: 'test',
          name: 'test',
          teachersName: 'test'
        }}/>
      </>
  )
}

export default ScheduleRow;