import ScheduleItem from '../../components/scheduleItem';
import React from 'react';
import { ScheduleGrid, SchedulePaper } from './scheduleColumn.style';

const ScheduleColumn = ({ columnWidth, dayData }) => {
  const calculatedWidth = +columnWidth.substring(0, columnWidth.length - 2);

  return (
    <div>
      {dayData &&
        ['08:30', '10:25', '12:20', '14:15', '16:10', '18:30'].map(
          (dayTime) => (
            <ScheduleGrid key={dayTime} item columnwidth={calculatedWidth}>
              <SchedulePaper
                columnwidth={calculatedWidth}
                ispresent={dayData.pairs
                  .some((obj) => obj.time === dayTime)
                  .toString()}
              >
                <ScheduleItem
                  scheduleItemData={dayData.pairs.find(
                    (obj) => obj.time === dayTime
                  )}
                />
              </SchedulePaper>
            </ScheduleGrid>
          )
        )}
    </div>
  );
};
export default ScheduleColumn;
