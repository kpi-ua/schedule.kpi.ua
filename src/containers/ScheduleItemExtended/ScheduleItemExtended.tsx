import { Pair } from '../../models/Pair';
import { useState } from 'react';
import { ScheduleItemProps } from '../ScheduleItem/types';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';
import CaretDown from '../../assets/icons/caret-down.svg?react';
import { cn } from '../../common/utils/cn';

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
    scheduleMatrixCell.map((item, i) => {
      const isFirst = i === 0;
      const isLast = i === scheduleMatrixCell.length - 1;

      return (
        <div
          className={cn(
            "relative rounded-2xl border border-neutral-200 bg-bg-card p-4 shadow-schedule-item before:content-[''] after:content-['']",
            (!isLast || hasData) && 'rounded-b-none border-b-0',
            !isFirst &&
              'rounded-t-none [border-top-style:dashed] before:absolute before:top-0 before:left-0 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full after:absolute after:top-0 after:right-0 after:h-4 after:w-4 after:translate-x-1/2 after:-translate-y-1/2 after:rounded-full',
          )}
          key={i}
        >
          <ChildComponent collapsed={collapsed} scheduleMatrixCell={item} />
        </div>
      );
    });

  if (!scheduleMatrixCell || !scheduleMatrixCell.length) {
    return null;
  }

  return (
    <div className="z-9" style={{ gridRowStart: `span ${scheduleMatrixCell.length}` }}>
      {generateScheduleUnits()}
      {hasData && (
        <div
          className="flex cursor-pointer items-center justify-center gap-1.5 rounded-b-[15px] bg-neutral-200 p-[15px] text-center font-semibold text-black"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span>{collapsed ? 'Більше інформації' : 'Менше інформації'}</span>
          <CaretDown className={cn(!collapsed && 'rotate-180')} />
        </div>
      )}
    </div>
  );
};

export default ScheduleItemExtended;
