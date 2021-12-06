import { ScheduleItemExtendedUnit, ScheduleItemExtendedWrapper } from './scheduleItemExtended.style';
import ScheduleItemContent from '../../components/scheduleItemContent';

const ScheduleItemExtended = ({scheduleItemData}) => {
  const generateScheduleUnits = () => {
    return scheduleItemData.map((item, i) => {
      return (
        <ScheduleItemExtendedUnit key={i}>
          <ScheduleItemContent scheduleItemData={item}/>
        </ScheduleItemExtendedUnit>
      );
    });
  };

  return scheduleItemData && scheduleItemData.length ? (
    <ScheduleItemExtendedWrapper items={scheduleItemData.length}>
      {generateScheduleUnits()}
    </ScheduleItemExtendedWrapper>
  ) : null;
};

export default ScheduleItemExtended;