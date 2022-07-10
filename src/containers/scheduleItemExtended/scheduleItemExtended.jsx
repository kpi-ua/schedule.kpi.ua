import { ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper, CollapseItem } from './scheduleItemExtended.style';
import ScheduleItemContent from '../../components/scheduleItemContent';
import { useEffect, useState } from 'react';

const ScheduleItemExtended = ({scheduleItemData}) => {
  const [collapsed, setCollapse] = useState(true);
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    const countEmpty = scheduleItemData.reduce((totalEmpty, currentItem) => {
      return totalEmpty + (currentItem.teacherName === "" && currentItem.place === "")
    }, 0)
    
    if(countEmpty === scheduleItemData.length){
      setHasData(false)
    }
  }, [scheduleItemData])

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
      {hasData && <CollapseItem onClick={() => setCollapse(value => !value)}>{collapsed ? 'Більше інформації' : 'Менше інформації'}</CollapseItem>}
    </ScheduleItemExtendedWrapper>
  ) : null;
};

export default ScheduleItemExtended;