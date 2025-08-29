import {
  ScheduleItemExtendedWrapper,
  CollapseItem,
  Caret,
  ScheduleItemExtendedUnit,
} from './ScheduleItemExtended.style';
import { Pair } from '../../models/Pair';
import { useState } from 'react';
import { ScheduleItemProps } from '../ScheduleItem/types';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';

interface ScheduleItemExtendedProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>[];
  hasData: boolean;
  childComponent: React.ComponentType<ScheduleItemProps<T>>;
}

const ScheduleItemExtended = <T extends Pair>({
  scheduleMatrixCell,
  hasData,
  childComponent: ChildComponent,
}: ScheduleItemExtendedProps<T>) => {
  const [collapsed, setCollapsed] = useState(true);

  const generateScheduleUnits = () =>
    scheduleMatrixCell.map((item, i) => (
      <ScheduleItemExtendedUnit key={i}>
        <ChildComponent collapsed={collapsed} scheduleMatrixCell={item} />
      </ScheduleItemExtendedUnit>
    ));

  if (!scheduleMatrixCell || !scheduleMatrixCell.length) {
    return null;
  }

  return (
    <ScheduleItemExtendedWrapper $items={scheduleMatrixCell.length}>
      {generateScheduleUnits()}
      {hasData && (
        <CollapseItem onClick={() => setCollapsed(!collapsed)}>
          <span>{collapsed ? 'Більше інформації' : 'Менше інформації'}</span>
          <Caret open={!collapsed} />
        </CollapseItem>
      )}
    </ScheduleItemExtendedWrapper>
  );
};

export default ScheduleItemExtended;
