import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import { Pair } from '../../models/Pair';

import SubjectTypeBadge from '../../components/SubjectTypeBadge';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';

interface Props<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
  children: React.ReactNode;
}

const ScheduleItemBase = <T extends Pair>({ scheduleMatrixCell, collapsed, children }: Props<T>) => {
  const {
    pair: { name, tag, dates },
  } = scheduleMatrixCell;

  return (
    <>
      <div className="flex items-center justify-between gap-[25px]">
        <SubjectTypeBadge type={tag} dates={dates}>
          {SUBJECT_TYPES[tag]}
        </SubjectTypeBadge>
        {scheduleMatrixCell.currentPair && (
          <span className="relative text-xs font-bold text-current-pair uppercase before:absolute before:top-1/2 before:-left-[13px] before:block before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-current-pair before:content-['']">
            Зараз
          </span>
        )}
      </div>
      <div className="mt-3 text-sm leading-[17px] font-bold text-primary-font">{name}</div>
      {!collapsed && <div className="mt-3 flex flex-col gap-3">{children}</div>}
    </>
  );
};

export default ScheduleItemBase;
