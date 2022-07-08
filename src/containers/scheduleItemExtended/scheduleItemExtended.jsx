import { ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper, CollapseItem } from './scheduleItemExtended.style';
import ScheduleItemContent from '../../components/scheduleItemContent';
import { useEffect, useState } from 'react';

const ScheduleItemExtended = ({scheduleItemData}) => {
  const [collapsed, setCollapse] = useState(true);
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    let count = 0
    let countEmpty = 0
    scheduleItemData.forEach(item => {
        count++
        if(item.teacherName === "" && item.place === ""){
          countEmpty++
        }
    })
    if(count === countEmpty){
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