import { ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper, CollapseItem } from './scheduleItemExtended.style';
import ScheduleItemContent from '../../components/scheduleItemContent';
import { useState } from 'react';

const ScheduleItemExtended = ({scheduleItemData}) => {
  const [collapsed, setCollapse] = useState(true);

  const generateScheduleUnits = () => {
    return scheduleItemData.map((item, i) => {
      return (
        <ScheduleItemExtendedUnit key={i}>
          <ScheduleItemContent collapsed={collapsed} scheduleItemData={item}/>
        </ScheduleItemExtendedUnit>
      );
    });
  };

  return scheduleItemData && scheduleItemData.length ? (
    <ScheduleItemExtendedWrapper items={scheduleItemData.length}>
      {generateScheduleUnits()}
      <CollapseItem onClick={() => setCollapse(value => !value)}>{collapsed ? 'Більше інформації' : 'Менше інформації'}</CollapseItem>
    </ScheduleItemExtendedWrapper>
  ) : null;
};

export default ScheduleItemExtended;