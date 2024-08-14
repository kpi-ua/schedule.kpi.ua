import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useCurrentMode } from "../../common/utils/useCurrentMode";
import { DAY_OPTIONS } from "../../common/constants/dayOptions";
import { ScheduleDayTogglerContainer } from "./scheduleDayToggler.style";
import { useCurrentDateParams } from "../../common/utils/useCurrentDateParams";
import { ScreenSize } from '../../types/ScreenSize';

interface ScheduleDayTogglerProps {
  onChange: (value: string) => void;
}

const ScheduleDayToggler = ({ onChange }: ScheduleDayTogglerProps) => {
  const mode = useCurrentMode();
  const { currentDay } = useCurrentDateParams();

  const getDayOption = () => {
    if (!currentDay || currentDay === 6 || currentDay < 0) {
      return 0;
    }

    switch (mode) {
      case ScreenSize.ExtraSmall:
        return currentDay;
      case ScreenSize.Small:
        return Math.floor(currentDay / 2);
      case ScreenSize.Medium:
        return Math.floor(currentDay / 3)
      default:
        return 0;
    }
  };

  if (!mode || mode === ScreenSize.Big) {
    return null;
  }

  return (
    <ScheduleDayTogglerContainer>
      <OptionMultipleToggler
        currentValue={
          DAY_OPTIONS[mode] && DAY_OPTIONS[mode][getDayOption()].value
        }
        onChange={onChange}
        options={DAY_OPTIONS[mode]}
      />
    </ScheduleDayTogglerContainer>
  );
};

export default ScheduleDayToggler;
