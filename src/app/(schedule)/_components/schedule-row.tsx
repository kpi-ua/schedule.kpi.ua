import { Pair } from '@/models/pair';
import { ScheduleComponentsProps } from '@/types/schedule-components-props';
import { UnknownScheduleMatrixCell } from '@/types/schedule-matrix';

interface ScheduleRowProps<T extends Pair> extends ScheduleComponentsProps<T> {
  scheduleMatrixCell: UnknownScheduleMatrixCell<T>[];
}

const ScheduleRow = <T extends Pair>({
  scheduleMatrixCell,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleRowProps<T>) => {
  return (
    <>
      {scheduleMatrixCell.map((item, index) => {
        if (Array.isArray(item)) {
          return <BaseComponentExtended key={index} scheduleMatrixCell={item} />;
        }

        return item ? <BaseComponent key={index} scheduleMatrixCell={item} /> : <div className="h-37.5" key={index} />;
      })}
    </>
  );
};

export default ScheduleRow;
