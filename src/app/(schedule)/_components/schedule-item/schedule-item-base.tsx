import { SUBJECT_TYPES } from '@/lib/constants/common';
import { Pair } from '@/models/Pair';
import { ScheduleMatrixCell } from '@/types/ScheduleMatrix';

import { NowLabel } from '../../../../components/now-label';
import { SubjectTypeBadge } from '../../../../components/subject-type-badge';

interface Props<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
  children: React.ReactNode;
}

export const ScheduleItemBase = <T extends Pair>({ scheduleMatrixCell, collapsed, children }: Props<T>) => {
  const {
    pair: { name, tag, dates },
  } = scheduleMatrixCell;

  return (
    <>
      <div className="flex items-center justify-between gap-6.25">
        <SubjectTypeBadge type={tag} dates={dates}>
          {SUBJECT_TYPES[tag]}
        </SubjectTypeBadge>
        {scheduleMatrixCell.currentPair && <NowLabel />}
      </div>
      <div className="mt-3 text-sm leading-4.25 font-bold text-primary-font">{name}</div>
      {!collapsed && <div className="mt-3 flex flex-col gap-3">{children}</div>}
    </>
  );
};
