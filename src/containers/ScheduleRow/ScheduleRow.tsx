import { EmptyElement } from './ScheduleRow.style';
import { Pair } from '../../models/Pair';
import { UnknownScheduleMatrixCell } from '../../types/ScheduleMatrix';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';

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

        return item ? <BaseComponent key={index} scheduleMatrixCell={item} /> : <EmptyElement key={index} />;
      })}
    </>
  );
};

export default ScheduleRow;
