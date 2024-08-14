import { ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper, CollapseItem } from './scheduleItemExtended.style';
import ScheduleItemContent from '../../components/scheduleItemContent';
import { useMemo, useState } from 'react';

interface ScheduleItemExtendedProps {
  scheduleItemData: any[];
}

const ScheduleItemExtended = ({ scheduleItemData }: ScheduleItemExtendedProps) => {
  const [collapsed, setCollapse] = useState(true);

  const hasData = useMemo(() => {
    const emptyEntries = scheduleItemData.filter(x => x.teacherName === '' && x.place === '');

    return emptyEntries.length !== scheduleItemData.length;
  }, [scheduleItemData]);

  const generateScheduleUnits = () => scheduleItemData.map((item, i) => (
    <ScheduleItemExtendedUnit key={i}>
      <ScheduleItemContent collapsed={collapsed} scheduleItemData={item}/>
    </ScheduleItemExtendedUnit>
  ));

  if (!scheduleItemData || !scheduleItemData.length) {
    return null;
  }

  return (
    <ScheduleItemExtendedWrapper items={scheduleItemData.length}>
      {generateScheduleUnits()}
      {hasData &&
        <CollapseItem
          onClick={() => setCollapse(value => !value)}
        >
          {collapsed ? 'Більше інформації' : 'Менше інформації'}
        </CollapseItem>}
    </ScheduleItemExtendedWrapper>
  );
};

export default ScheduleItemExtended;