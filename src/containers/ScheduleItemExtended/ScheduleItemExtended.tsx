import {
  ScheduleItemExtendedUnit,
  ScheduleItemExtendedWrapper,
  CollapseItem,
  Caret,
} from './ScheduleItemExtended.style';
import ScheduleItemContent from '../../components/ScheduleItemContent';
import { useMemo, useState } from 'react';
import { ScheduleMatrixCell } from '../../common/utils/generateScheduleMatrix';

interface ScheduleItemExtendedProps {
  scheduleMatrixCell: ScheduleMatrixCell[];
}

const ScheduleItemExtended = ({ scheduleMatrixCell }: ScheduleItemExtendedProps) => {
  const [collapsed, setCollapse] = useState(true);

  const hasData = useMemo(() => {
    const emptyEntries = scheduleMatrixCell.filter((x) => x.teacherName === '' && x.place === '');

    return emptyEntries.length !== scheduleMatrixCell.length;
  }, [scheduleMatrixCell]);

  const generateScheduleUnits = () =>
    scheduleMatrixCell.map((item, i) => (
      <ScheduleItemExtendedUnit key={i}>
        <ScheduleItemContent collapsed={collapsed} scheduleMatrixCell={item} />
      </ScheduleItemExtendedUnit>
    ));

  if (!scheduleMatrixCell || !scheduleMatrixCell.length) {
    return null;
  }

  return (
    <ScheduleItemExtendedWrapper items={scheduleMatrixCell.length}>
      {generateScheduleUnits()}
      {hasData && (
        <CollapseItem onClick={() => setCollapse((value) => !value)}>
          <span>{collapsed ? 'Більше інформації' : 'Менше інформації'}</span>
          <Caret open={!collapsed} />
        </CollapseItem>
      )}
    </ScheduleItemExtendedWrapper>
  );
};

export default ScheduleItemExtended;
